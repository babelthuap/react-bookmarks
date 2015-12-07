import React from "react";
import SortBy from "./SortBy";
import Form from "./Form";

class List extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      data: [
        {"createdAt": 1449445818815, "title": "Ise Jingu", "url":"http://www.isejingu.or.jp/english/" },
        {"createdAt": 1449445829857, "title": "Kumano Kodo", "url":"http://www.tb-kumano.jp/en/kumano-kodo/#overview" },
        {"createdAt": 1449445720407, "title": "Takachiho", "url":"http://www.jnto.go.jp/eng/location/regional/miyazaki/takachiho.html" }
      ],
      sortBy: "createdAt"  
    };
  }

  changeSortBy(e){
    e.preventDefault();
    this.setState({ sortBy: e.target.value });
  }

  addBookmark(newBookmark){
    let newData = this.state.data.concat(newBookmark);
    this.setState({data: newData});
  }

  deleteBookmark(createdAt, e){
    e.preventDefault();
    let newData = this.state.data.filter(bookmark => bookmark.createdAt !== createdAt);
    this.setState({data: newData});
  }

  render() {
    let data = this.state.data;
    let sortBy = this.state.sortBy;
    if (sortBy === "title") {
      data.sort((a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase());
    } else {
      data.sort((a, b) => a[sortBy] > b[sortBy]);
    }
    let bookmarksAsLis = data.map((bookmark, index) => {
      return <li key={index}>
               <a href={bookmark.url} target="_blank">{bookmark.title}</a> 
               &nbsp;
               <button id={bookmark.createdAt}
                       className="fa fa-trash"
                       onClick={this.deleteBookmark.bind(this, bookmark.createdAt)}>
               </button>
             </li>
    });
    return (
      <div>
        <SortBy changeSortBy={this.changeSortBy.bind(this)} />
        <ul>{bookmarksAsLis}</ul>
        <div><em>Total: {data.length}</em></div>
        <hr />
        <Form addBookmark={this.addBookmark.bind(this)}/>
      </div>
    );
  }
}

export default List;
