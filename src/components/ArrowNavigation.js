import { useNavigate } from "react-router-dom";

export default function ArrowNavigation({ currentId, dataLength }) {
  const navigate = useNavigate();
  const id = parseInt(currentId);

  const handlePrev = () => {
    const prevId = Math.max(0, id - 1);
    navigate(`/detail/${prevId}`);
  };

  const handleNext = () => {
    const nextId = Math.min(dataLength - 1, id + 1);
    navigate(`/detail/${nextId}`);
  };

  return (
    <>
      <button className="arrow left-arrow" onClick={handlePrev}>
        {"<"}
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
        {">"}
      </button>
    </>
  );
}
