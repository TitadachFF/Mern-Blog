import React from "react";

const EditPage = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="summary" placeholder="Summary" />
      <input type="file" name="file" id="file" />
      <Editor />
      <button>Create post</button>
    </form>
  );
};

export default EditPage;
