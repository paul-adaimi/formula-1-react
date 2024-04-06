import Navbar from "../Components/Navbar";
import MainMenu from "../Components/MainMenu";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { PostsProvider } from "../Context/PostsContext";

function Layout() {
  return (
    <PostsProvider>
      <div className="layout">
        <Navbar />
        {<MainMenu />}
        <div className="video-background">
          <video autoPlay muted loop className="colorful-video">
            <source src="pexels_videos_2025634 (720p).mp4" type="video/mp4" />
          </video>
        </div>
        <div className="layout-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </PostsProvider>
  );
}

export default Layout;
