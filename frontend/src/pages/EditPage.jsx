import Editor from "../components/Editor";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_BASE_URL;
const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    fetch(`${baseURL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, [id]);
  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files[0]);
    }
    const response = await fetch(`${baseURL}/post`, {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if(redirect){
    return <Navigate to={"/post"}/>
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="summary"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFiles(e.target.files)}
      />
      <Editor onChange={setContent} value={content} />
      <br />
      <button>Update post</button>
    </form>
  );
};

export default EditPage;
