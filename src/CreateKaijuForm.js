import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: "",
    power: "",
    image: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={(kaiju) => this.props.handleNewSubmit(this.state)}>

        <label>Name: </label>
        <input type='text' placeholder="add your name here.." name="name" onChange={this.handleChange} value={this.state.name}/>

        <label>Power: </label>
        <input type='text' placeholder="add your power here..." name="power" onChange={this.handleChange} value={this.state.power}/>

        <label>Image: </label>
        <input type='text' placeholder="add your image url here..." name="image" onChange={this.handleChange} value={this.state.image}/>

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
