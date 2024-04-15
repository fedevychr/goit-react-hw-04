const ErrorMessage = ({ massage = "error" }) => {
  return (
    <div>
      <p>{massage}</p>
    </div>
  );
};

export default ErrorMessage;
