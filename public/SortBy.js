import React from "react";

class SortBy extends React.Component {
  render() {
    return (
      <div>
        <span>Sort By: </span>
        <button className="btn btn-default" value="createdAt" onClick={this.props.changeSortBy} >Date Added</button>
        <button className="btn btn-default" value="title" onClick={this.props.changeSortBy} >Title</button>
      </div>
    );
  }
}

export default SortBy;
