import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Reactive Bookmarks</h1>
        <em>by Asami Kawamoto and Nicholas Neumann-Chun</em>
        <hr />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
