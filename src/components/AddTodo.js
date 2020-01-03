import React from "react";

// コンポーネントは文字列を返すだけの関数でいい
export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={title} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
  handleChange = event => {
    const target = event.target.value;
    this.setState({ title: target });
  };
  handleSubmit = event => {
    const { title } = this.state;
    event.preventDefault();
    // 親から受け取ったものはpropsで受け取る
    this.props.addTodo(title);
    this.setState({ title: "" });
  };
}
