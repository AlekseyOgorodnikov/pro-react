import React, { Component } from 'react'

export class TodoRow extends Component {
    render() {
        return (
            <tr>
                {this.props.item.action}
                <td> <input type='checkbox' checked={this.props.item.done} onChange={() => this.props.callback(this.props.item)} /></td>
            </tr>
        )
    }
}
