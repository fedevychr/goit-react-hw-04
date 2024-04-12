import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <>
      <LoadMoreBtn />
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}

export default App;
