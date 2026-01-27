import { useNavigate } from "react-router-dom";

export default function BackButton({ to, label, state }) {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(to, { state })}>
      {label}
    </button>
  );
}
