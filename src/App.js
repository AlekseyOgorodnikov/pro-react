import React, { Component } from 'react';
import {TodoBanner} from './TodoBanner';
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";

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
      // newItemText: ""
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
  chagedItemTodo = () => {
    const itemTodo = this.state.todoItems.filter(todo => !todo.done).length
    const textSet = 'У вас'
    if (itemTodo === 0) {
      return 'У вас нет не оконченых дел'
    } else if (itemTodo === 1) {
      return textSet + ' ' + itemTodo + ' неоконченное дело'
    } else if (itemTodo >= 2 && itemTodo <= 4) {
      return textSet + ' ' + itemTodo + ' неоконченных дела'
    } else if (itemTodo >= 5) {
      return textSet + ' ' + itemTodo + ' неоконченных дел'
    }
  }
  render() {
    return (
      <div>
        <h4 className="bg-info text-white text-center p-2">
          Привет {this.state.userName}! <span>({this.chagedItemTodo()})</span>
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
              <tr><th>Описание</th><th>Выбрано/Не выбрано</th></tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}


