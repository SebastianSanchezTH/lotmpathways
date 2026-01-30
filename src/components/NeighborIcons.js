import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NeighborIcons({ neighbors = [], fromIndex = 0 }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  if (!neighbors.length) {
    return <p className="no-neighbors">None</p>;
  }

  return (
    <div className="detail-neighbors">
      {neighbors.map((neighbor) => (
        <img
          key={neighbor.id}
          src={hovered === neighbor.id ? neighbor.iconColor : neighbor.iconOff}
          alt={`Pathway ${neighbor.id}`}
          className="neighbor-icon"
          onMouseEnter={() => setHovered(neighbor.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() =>
            navigate(`/detail/${neighbor.id}`, {
              state: { fromIndex },
            })
          }
        />
      ))}
    </div>
  );
}
