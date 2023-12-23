import { Routes, Route } from "react-router-dom";

import PageTemplate from "@components/templates/PageTemplate";

// Pages

import HomePage from "@pages/HomePage";
import AudioBooksPage from "@pages/AudioBooksPage";
import MostLikedPage from "@pages/MostLikedPage";
import MostStaredPage from "@pages/MostStaredPage";
import WishListPage from "@pages/WishListPage";

// Global Stylesheets

import "normalize.css/normalize.css";
import "./App.css";

function App() {
  return (
    <div>
      <PageTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audio-books" element={<AudioBooksPage />} />
          <Route path="/most-liked" element={<MostLikedPage />} />
          <Route path="/most-stared" element={<MostStaredPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
        </Routes>
      </PageTemplate>
    </div>
  );
}

export default App;
