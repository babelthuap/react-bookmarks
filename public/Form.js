import React from "react";

class Form extends React.Component {
  handleSubmit(e){
    e.preventDefault();

    let newBookmark = {
      createdAt: Date.now(), 
      title: this.refs.title.value,
      url: this.refs.url.value
    };
    this.props.addBookmark(newBookmark);
    
    this.refs.title.value = "";
    this.refs.url.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Title" ref="title"/>
        <input type="url" placeholder="URL" ref="url" />
        <button className="btn btn-default" type="submit">Add Bookmark</button>
      </form>
    );
  }
}

export default Form;
