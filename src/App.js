import React from "react";
import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchForm";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import ImageGalleryItem from "./components/ImageGalleryItem";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Searchbar>
        <SearchForm />
      </Searchbar>
      {/* <Modal />
      <Loader /> */}
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
    </div>
  );
}

export default App;
