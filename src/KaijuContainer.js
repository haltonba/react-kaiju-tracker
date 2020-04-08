//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    sortByName: false
  }

  componentDidMount() {
    fetch('http://localhost:4000/kaijus/')
    .then(response => response.json())
    .then(json => this.setState({kaijus: json}))
  }

  renderKaijus = () => {
    return this.sortKaijus().map(kaiju => {
      return <KaijuCard key={kaiju.id} kaiju={kaiju} handleEditSubmit={this.handleEditSubmit} deleteKaiju={this.deleteKaiju}/>
    })
  }

  deleteKaiju = (deletedKaiju) => {
    fetch(`http://localhost:4000/kaijus/${deletedKaiju.id}`, {
      method: "DELETE"
    })
    let newArray =  this.state.kaijus.filter(kaiju => kaiju.id !== deletedKaiju.id)
      this.setState({
        kaijus: newArray
      })
  }

  handleEditSubmit = (event, kaiju) => {
    event.preventDefault()
    fetch(`http://localhost:4000/kaijus/${kaiju.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(kaiju)
    })
    .then(response => response.json())
    .then(json => {
      let newArray =  this.state.kaijus.map(kaiju => kaiju.id === json.id ? json : kaiju)
      this.setState({
        kaijus: newArray
      })
    })
  }

  handleNewSubmit = (kaiju) => {
    fetch('http://localhost:4000/kaijus/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(kaiju)
    })
    .then(response => response.json())
    .then(json => this.setState({
      kaijus: [...this.state.kaijus, kaiju]
    }))
  }

  handleSort = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  sortKaijus = () => {
    let kaijus = this.state.kaijus
    if (this.state.sortByName) {
      return [...kaijus].sort((kaiju1, kaiju2) => {
        return kaiju1.name.localeCompare(kaiju2.name)
      })
    } 
    else {
      return kaijus
    }
  }

  render() {
    return (
      <div>

        <CreateKaijuForm handleNewSubmit={this.handleNewSubmit}/>

        Sort By Name? <input type="checkbox" onChange={this.handleSort}/>

        <div id='kaiju-container'>

          {this.renderKaijus()}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </div>
    )

  }
}

export default KaijuContainer
