import React from "react";
import ReactDOM from "react-dom";
import List from "./List";


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <hr />
        <List />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('react'));
