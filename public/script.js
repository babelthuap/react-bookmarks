import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <hr />
        <SortBy />
      </div>
    );
  }
}


class SortBy extends React.Component {
  render() {
    return (
      <div>
        <span>Sort By: </span>
        <button>Date Added</button>
        <button>Title</button>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('react'));
