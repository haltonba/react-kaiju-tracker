// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    editToggle: false
  }

  handleEditToggle = () => {
    this.setState({
      editToggle: !this.state.editToggle
    })
  }

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.kaiju.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.kaiju.power}</h3>

        <img className='kaiju-card-image' src={this.props.kaiju.image} alt={"Kaiju Dawg"} />

        {this.state.editToggle ? <EditKaijuForm kaiju={this.props.kaiju} handleEditSubmit={this.props.handleEditSubmit}/> : null}
        <button className='kaiju-card-edit-button' onClick={this.handleEditToggle}>Edit</button>
        <button onClick={(kaiju) => this.props.deleteKaiju(this.props.kaiju)}>Delete</button>

      </div>
    )
  }
}

export default KaijuCard
