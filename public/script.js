import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props){
    super(props)
    this.state = { sortedBookmarkList:[] } 
  }

  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <hr />
        <SortBy sortText={this.state.sortText} />
        <List data={bookmarkdata} />
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

  // sortText:

  render() {
    return (
      <div>
        <span>Sort By: </span>
        <button value="date" onClick={this.sortList.bind(this)} sortText={this.props.sortText} >Date Added</button>
        <button value="title" onClick={this.sortList.bind(this)}  sortText={this.props.sortText} >Title</button>
      </div>
    );
  }
}

let bookmarkdata = [
  {"createdAt": "1449445818815", "title": "Kumano Kodo", "url":"http://www.tb-kumano.jp/en/kumano-kodo/#overview" },
  {"createdAt": "1449445720407", "title": "Ise Jingu", "url":"http://www.isejingu.or.jp/english/" },
  {"createdAt": "1449445829857", "title": "Takachiho", "url":"http://www.jnto.go.jp/eng/location/regional/miyazaki/takachiho.html" }
]

class List extends React.Component {
    constructor(props){
      super(props);
      console.log("props", this.props)
    }

    render() {
        return (
            <div>
              { this.props.data.map((obj, index)=> {
                return ( <ul key={index}><a href={obj.url}> {obj.title} </a></ul> ) })
              }
              <div>total</div>
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
            <button type="submit">Add Bookmark</button>
          </form>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('react'));
