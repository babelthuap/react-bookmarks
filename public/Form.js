import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addBookmark}>
        <input type="text" name="title" placeholder="Title"/>
        <input type="url" name="url" placeholder="URL"  />
        <button className="btn btn-default" type="submit">Add Bookmark</button>
      </form>
    );
  }
}

export default Form;
