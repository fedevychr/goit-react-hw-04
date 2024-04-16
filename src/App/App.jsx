import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ImageModal from "../components/ImageModal/ImageModal";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import SearchBar from "../components/SearchBar/SearchBar";
import css from "../App/App.module.css";

import { getPhotos } from "../services/api";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className={css.body}>
      <SearchBar searchPhotos={searchPhotos} />

      <div className={css.main}>
        {photos && <ImageGallery photos={photos} openModal={openModal} />}
        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div className={css.btnWrapper}>
            <LoadMoreBtn onLoadMore={onLoadMore}>Load more</LoadMoreBtn>
          </div>
        )}
      </div>
      <ImageModal
        photo={selectedPhoto}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
