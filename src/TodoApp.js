import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>todoList</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
  // リスト追加のメソッドは親要素側で作成、それを子供に渡す
  // arrow関数で渡さないと機能しない
  addTodo = title => {
    const { todos, nextId } = this.state;
    this.setState({
      nextId: nextId + 1,
      todos: [...todos, { id: nextId, title }]
    });
  };
  deleteTodo = num => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== num;
      })
    });
  };
}
