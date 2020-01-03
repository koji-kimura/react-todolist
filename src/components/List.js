import React from "react";

// コンポーネントは文字列を返すだけの関数でいい
export class List extends React.Component {
  render() {
    const { todos, deleteTodo } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          {todo.id}
          {todo.title}
          {/* アロー関数で記載しないとロード時にイベントが発生する */}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
