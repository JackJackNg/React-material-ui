import React from 'react'
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todo: this.props.todo }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick (e) {
    const input = this.refs.input.input

    this.props.addItem(input.value)
    e.preventDefault()
  }


  render () {
    return (
      <form action="">
        <TextField className="input" ref="input" type="text" onMouseEnter={this.handleMouseEnter} hintText="Your to do item" />
        <Button label="Add" variant="raised" primary={true} onClick={this.handleClick} />
      </form >
    )
  }
}