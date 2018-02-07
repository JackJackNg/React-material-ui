import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul>
                {this.props.todo.map((e) =>(<TodoItem editItem={this.props.editItem} removeItem={this.props.removeItem} itemvalue={e} key={e} />))}
            </ul>
        )
    }
}

export default TodoDisplay