import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Алексей',
      todoItems: [
        { action: "Купить цветы", done: false },
        { action: "Купить обувь", done: false },
        { action: "Коллекция билетов", done: true },
        { action: "Позвонить Виктору", done: false }
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
  }
  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
  });
  todoTableRows = () => this.state.todoItems.map(item =>
    <tr key={item.action}>
      <td>{item.action}</td>
      <td> <input type='checkbox' checked={item.done} onChange={() => this.toggleTodo(item)} /></td>
    </tr>
  )

  render() {
    return (
      <div>
        <h4 className="bg-info text-white text-center p-2">
          Привет {this.state.userName}!
          (Осталось не выбрано {this.state.todoItems.filter(todo => !todo.done).length} задания)
      </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
              onClick={this.createNewTodo}>Добавить задание</button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}


