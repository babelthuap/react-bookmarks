import React from "react";

class SortBy extends React.Component {
  render() {
    return (
      <p>
        <span>Sort By: </span>
        <button className="btn btn-default" value="createdAt" onClick={this.props.changeSortBy}>Date Added</button>
        &nbsp;
        <button className="btn btn-default" value="title" onClick={this.props.changeSortBy}>Title</button>
      </p>
    );
  }
}

export default SortBy;
