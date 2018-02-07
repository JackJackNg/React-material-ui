import React from 'react'

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todo: this.props.todo }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    // I leave here
    this.props.addItem(this.refs.input.value)
  }


  render () {
    return (
      <form action="">
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" ref="input" type="text" onMouseEnter={this.handleMouseEnter} placeholder="Find a repository" />
          </p>
          <p className="control">
            <a className="button is-info" onClick={this.handleClick}> Add  </a>
          </p>
        </div>

      </form>
    )
  }
}