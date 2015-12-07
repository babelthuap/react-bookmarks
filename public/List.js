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

export default List;
