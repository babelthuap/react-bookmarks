import React from "react";

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

export default Form;
