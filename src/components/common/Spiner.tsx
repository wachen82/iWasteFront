import Spinner from "react-bootstrap/Spinner";

export const SpinnerOne = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
