import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore, children }) => {
  return (
    <button className={css.button} onClick={onLoadMore}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
