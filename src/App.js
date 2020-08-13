import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Алексей',
      todoItems: [
        { action: "Купить цветы", done: false },
        { action: "Купить обувь", done: false },
        { action: "Collect Коллекция билетов", done: true },
        { action: "Пощвонить Виктору", done: false }
      ],
      newItemText: ""
    }
  }
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value })
  }
  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({ todoItems: [...this.state.todoItems, { action: this.state.newItemText, done: false }], newItemText: '' })
    }
    console.log(this.state.todoItems);
  }
  render() {
    return (
      <div>
        <h4 className="bg-info text-white text-center p-2">
          Привет {this.state.userName}!
          ({this.state.todoItems.filter(todo => !todo.done).length} элемент списка)
      </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
              onClick={this.createNewTodo}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}


