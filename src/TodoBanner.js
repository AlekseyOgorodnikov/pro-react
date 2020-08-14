import React, { Component } from 'react'

export class TodoBanner extends Component {
    render() {
        return (
            <h4 className="bg-info text-white text-center p-2">
                Привет {this.props.name}! <span>({this.props.tasks()})</span>
            </h4>
        )
    }
}
