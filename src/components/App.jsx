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
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchPhotos() {
      try {
        setError(null);
        setIsLoading(true);

        const data = await getPhotos(query, page);
        setTotalPage(data.total_pages);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, [query, page]);

  const searchPhotos = (newQuery) => {
    if (newQuery === query) return;
    setPhotos(null);
    setPage(1);
    setQuery(newQuery);
  };

  const onLoadMore = () => setPage((prevPage) => prevPage + 1);

  const isShowBtn = Boolean(photos?.length && !isLoading && page < totalPages);

  return (
    <div>
      <SearchBar searchPhotos={searchPhotos} />

      <div>
        {photos && <ImageGallery photos={photos} />}
        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div>
            <LoadMoreBtn onLoadMore={onLoadMore}>Load more</LoadMoreBtn>
          </div>
        )}
      </div>
      <ImageModal />
    </div>
  );
}

export default App;
