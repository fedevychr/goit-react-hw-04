import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.Loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
