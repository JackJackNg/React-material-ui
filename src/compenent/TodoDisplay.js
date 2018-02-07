import React, { Component } from 'react'
import TodoItem from './TodoItem';
import {
    Table,
    TableBody,
    // TableFooter,
    // TableHeader,
    // TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class TodoDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Table  >
               <TableBody>
                 {this.props.todo.map((e) => (<TodoItem editItem={this.props.editItem} removeItem={this.props.removeItem} itemvalue={e} key={e} />))}
                   
                </TableBody>

            </Table>
        )
    }
}

export default TodoDisplay