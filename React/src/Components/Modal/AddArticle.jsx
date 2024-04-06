import React, { useState } from "react";
import "./AddArticle.css";
import { useAuth } from "../../Context/AuthContext";
import { usePosts } from "../../Context/PostsContext";

const AddArticleModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const { request } = useAuth();

  const { fetchPosts } = usePosts();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a URL for the file
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", details);
    if (file) {
      formData.append("image", file);
    }

    await request({
      method: "POST",
      url: "post/create",
      body: formData,
      isJson: false,
    });

    fetchPosts();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modalBackdrop">
      <div onClick={(e) => e.stopPropagation()} className="modalContainer">
        <div className="modalHeader">
          <h2>Add Article</h2>
          <button onClick={onClose} className="closeButton">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modalForm">
          <div className="imageUploadContainer">
            <input
              onChange={handleFileChange}
              type="file"
              className="imageUploadInput"
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            )}
          </div>
          <input
            type="text"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="textInput"
          />
          <textarea
            placeholder="Article Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="textAreaInput"
          ></textarea>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticleModal;
