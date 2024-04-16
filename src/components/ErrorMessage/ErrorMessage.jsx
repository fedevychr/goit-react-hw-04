import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ massage = "error" }) => {
  return (
    <div className={css.container}>
      <p>{massage}</p>
    </div>
  );
};

export default ErrorMessage;
