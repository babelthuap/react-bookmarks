import React from "react";
import SortBy from "./SortBy";
import Form from "./Form";

class List extends React.Component {
  constructor(props){
    super(props);
    console.log("props", this.props)

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

  addBookmark(e){
    e.preventDefault();

    let newBookmark = {
      createdAt: Date.now(), 
      title: e.target[0].value,
      url: e.target[1].value
    };
    let newData = this.state.data.concat(newBookmark);
    this.setState({data: newData});
  }

  render() {
    let data = this.state.data;
    data.sort((a, b) => a[this.state.sortBy] > b[this.state.sortBy]);

    return (
      <div>
        <SortBy changeSortBy={this.changeSortBy.bind(this)} />
        <ul>
          { data.map((bookmark, index)=> {
            return ( <li key={index}><a href={bookmark.url}>{bookmark.title}</a></li> ) })
          }
        </ul>
        <div>Total: {data.length}</div>
        <Form addBookmark={this.addBookmark.bind(this)}/>
      </div>
    );
  }
}

export default List;
