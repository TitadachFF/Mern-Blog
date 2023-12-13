import React from "react";
import Editor from "../components/Editor";
const CreatePage = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="summary" placeholder="Summary" />
      <input type="file" name="file" id="file" />
      <Editor/>
      <br />
    <button>Create post</button>
    </form>
  )
};

export default CreatePage;
