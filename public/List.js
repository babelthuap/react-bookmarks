import React from "react";
import SortBy from "./SortBy";
import Form from "./Form";

class List extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      data: [
        {"createdAt": 1449445720407, "title": "CIse Jingu", "url":"http://www.isejingu.or.jp/english/" },
        {"createdAt": 1449445818815, "title": "BKumano Kodo", "url":"http://www.tb-kumano.jp/en/kumano-kodo/#overview" },
        {"createdAt": 1449445829857, "title": "Takachiho", "url":"http://www.jnto.go.jp/eng/location/regional/miyazaki/takachiho.html" }
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

  deleteBookmark(e){
    e.preventDefault();

    let newData = this.state.data.filter(bookmark => bookmark.createdAt !== Number(e.target.id));

    this.setState({data: newData});
  }

  render() {
    let data = this.state.data;
    let sortBy = this.state.sortBy
    data.sort((a, b) => {
      let type = typeof a[sortBy];
      return (type === "string" ? a[sortBy].toLowerCase() : a[sortBy]) >
             (type === "string" ? b[sortBy].toLowerCase() : b[sortBy]);
    });
    return (
      <div>
        <SortBy changeSortBy={this.changeSortBy.bind(this)} />
        <ul>
          { data.map((bookmark, index)=> {
            return ( <li key={index}><a href={bookmark.url}>{bookmark.title}</a> 
              &nbsp;<button id={bookmark.createdAt} key={index} onClick={this.deleteBookmark.bind(this)}>Delete</button></li> ) })
          }
        </ul>
        <div>Total: {data.length}</div>
        <Form addBookmark={this.addBookmark.bind(this)}/>
      </div>
    );
  }
}

export default List;
