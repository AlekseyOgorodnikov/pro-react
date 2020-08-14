import React, { Component } from 'react';
import { TodoBanner } from './TodoBanner';
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
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value })
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }]
      })
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
  });

  todoTableRows = () => this.state.todoItems.map(item =>
    <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
  )
  chagedItemTodo = () => {
    const itemTodo = this.state.todoItems.filter(todo => !todo.done).length
    const textSet = 'У вас'
    if (itemTodo === 0) {
      return 'У вас нет неоконченых дел'
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
        <TodoBanner name={this.state.userName} tasks={this.chagedItemTodo} />
        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo} />
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


