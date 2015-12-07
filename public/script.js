import React from "react";
import ReactDOM from "react-dom";

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

class List extends React.Component {
  constructor(props){
    super(props);
    console.log("props", this.props)

    this.state = { data: [
      {"createdAt": "1449445818815", "title": "Kumano Kodo", "url":"http://www.tb-kumano.jp/en/kumano-kodo/#overview" },
      {"createdAt": "1449445720407", "title": "Ise Jingu", "url":"http://www.isejingu.or.jp/english/" },
      {"createdAt": "1449445829857", "title": "Takachiho", "url":"http://www.jnto.go.jp/eng/location/regional/miyazaki/takachiho.html" }
    ] };
  }

  render() {
    return (
      <div>
        <SortBy sortText={this.state.sortText} />
        <ul>
          { this.state.data.map((bookmark, index)=> {
            return ( <li key={index}><a href={bookmark.url}>{bookmark.title}</a></li> ) })
          }
        </ul>
        <div>Total: {this.state.data.length}</div>
        <Form />
      </div>
    );
  }
}

class SortBy extends React.Component {
  sortList(e) {
    e.preventDefault();
    console.log("sortlist", e.target.value)
    
  }
  // sortText() {}
  render() {
    return (
      <div>
        <span>Sort By: </span>
        <button className="btn btn-default" onClick={this.sortList.bind(this)} sortText={this.props.sortText} >Date Added</button>
        <button className="btn btn-default" onClick={this.sortList.bind(this)} sortText={this.props.sortText} >Title</button>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title" required />
        <input type="url" placeholder="URL" required />
        <button className="btn btn-default" type="submit">Add Bookmark</button>
      </form>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('react'));
