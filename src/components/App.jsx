import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";

import { getPhotos } from "../services/api";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPage] = useState(1);

  // const [showBtn, setShowBtn] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchPhotos() {
      try {
        setIsLoading(true);
        setIsError(null);
        const data = await getPhotos(query);
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, [query]);

  const searchPhotos = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBar searchPhotos={searchPhotos} />

      <div>
        {photos && <ImageGallery photos={photos} />}
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        <div>
          <LoadMoreBtn>Load more</LoadMoreBtn>
        </div>
      </div>

      <ImageModal />
    </div>
  );
}

export default App;
