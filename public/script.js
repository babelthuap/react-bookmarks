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

    this.state = { 
      data: [
        {"createdAt": 1449445720407, "title": "CIse Jingu", "url":"http://www.isejingu.or.jp/english/" },
        {"createdAt": 1449445818815, "title": "BKumano Kodo", "url":"http://www.tb-kumano.jp/en/kumano-kodo/#overview" },
        {"createdAt": 1449445829857, "title": "ATakachiho", "url":"http://www.jnto.go.jp/eng/location/regional/miyazaki/takachiho.html" }
      ],
      sortBy: "createdAt"  
    };
  }

  sortText(e){
    console.log("event", e.target.value)
    this.setState({ sortBy: e.target.value })
  }

  render() {
    let data = this.state.data;
    data.sort((a, b) => a[this.state.sortBy] > b[this.state.sortBy]);

    return (
      <div>
        <SortBy sortText={this.sortText.bind(this)} />
        <ul>
          { data.map((bookmark, index)=> {
            return ( <li key={index}><a href={bookmark.url}>{bookmark.title}</a></li> ) })
          }
        </ul>
        <div>Total: {data.length}</div>
        <Form />
      </div>
    );
  }
}

class SortBy extends React.Component {

  render() {
    return (
      <div>
        <span>Sort By: </span>
        <button className="btn btn-default" value="createdAt" onClick={this.props.sortText} >Date Added</button>
        <button className="btn btn-default" value="title" onClick={this.props.sortText} >Title</button>
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
