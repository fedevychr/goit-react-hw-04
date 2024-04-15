const LoadMoreBtn = ({ onLoadMore, children }) => {
  return <button onClick={onLoadMore}>{children}</button>;
};

export default LoadMoreBtn;
