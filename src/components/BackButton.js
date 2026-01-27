import { useNavigate } from "react-router-dom";

export default function BackButton({ to = "/", label = "<", className = "" }) {
  const navigate = useNavigate();

  return (
    <button className={`back-button ${className}`} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}
