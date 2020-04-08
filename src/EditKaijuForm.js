import React from 'react'

class EditKaijuForm extends React.Component {

  state = {
    name: this.props.kaiju.name,
    power: this.props.kaiju.power,
    image: this.props.kaiju.image,
    id: this.props.kaiju.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={(event, kaiju) => this.props.handleEditSubmit(event, this.state)}>

          <label>Name: </label>
          <input type='text' name="name" value={this.state.name} onChange={this.handleChange}/>
          <br/>

          <label>Power: </label>
          <input type='text' name="power" value={this.state.power} onChange={this.handleChange}/>
          <br/>

          <label>Image URL: </label>
          <input type='text' name="image" value={this.state.image} onChange={this.handleChange}/>
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
