import { Routes, Route } from "react-router-dom";

import HomePage from "@pages/HomePage";
import AudioBooksPage from "@pages/AudioBooksPage";
import MostLikedPage from "@pages/MostLikedPage";
import MostStaredPage from "@pages/MostStaredPage";
import WishListPage from "@pages/WishListPage";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/audio-books" element={<AudioBooksPage />} />
        <Route path="/most-liked" element={<MostLikedPage />} />
        <Route path="/most-stared" element={<MostStaredPage />} />
        <Route path="/wish-list" element={<WishListPage />} />
      </Routes>
    </div>
  );
}

export default App;
