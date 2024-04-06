import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import AddArticleModal from "./Modal/AddArticle";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate("/sign-in");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="top-buttons">
      <div>{user && `${user.firstName} ${user.lastName}`}</div>
      <div className="right">
        {!user ? (
          <Link
            to="/sign-in"
            className="sign-in-button"
            style={{ color: "white" }}
          >
            <i className="fas fa-user fa-xs fa-inverse"></i> Sign In
          </Link>
        ) : (
          <>
            <AddArticleModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
            <Link to="/my-articles" className="sign-in-button">
              My Articles
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="sign-in-button"
            >
              Add Article
            </button>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
