import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Data } from "../components/Data";
import { sefirot } from "../components/DataSefirots";
import BackButton from "../components/BackButton";
import NeighborIcons from "../components/NeighborIcons";
import ScrollableContainer from "../components/ScrollableContainer";

import "../styles/Sefirot.css";
import "../styles/ArrowNavigation.css";
import "../styles/BackButton.css";
import "../styles/ScrollableContainer.css";

export default function Sefirot() {
  const { id } = useParams();
  const location = useLocation();

  const currentId = Number(id);
  const fromIndex = location.state?.fromIndex ?? 0;

  const data = Data.find((d) => d.id === currentId);
  const currentSefirot = sefirot.find((s) => s.id === currentId);

  const pathways = Data.filter((d) => d.sefirot?.id === currentId);

  const pathwayIcons = pathways.map((p) => ({
    id: Data.indexOf(p),
    iconOff: p.logoOff,
    iconColor: p.logoColor,
  }));

  if (!currentSefirot) {
    return <p>Not found</p>;
  }

  return (
    <div className="detail-backgroun">
      {/* Botón volver */}
      <BackButton to="/" label="x" state={{ restoreIndex: fromIndex }} />

      {/* Overlay */}
      <div
        className="overlay"
        style={{ backgroundColor: currentSefirot.overlayColor }}
      />

      {/* Logo del sefirot */}
      <div className="detail-logo">
        <img src={currentSefirot.image} alt="Sefirot" />
      </div>

      {/* Título */}
      <div className="detail-title">
        <h1>{currentSefirot.title}</h1>
      </div>

      {/* Contenido */}
      <div className="sefirot-container">
        <div className="info-sefirot">
          <h2>
            {currentSefirot.greatOldOne}
            <h3>Great old One</h3>
          </h2>

          <ScrollableContainer>
            <div className="sectionSefirot">
              <p>{currentSefirot.description}</p>

              {/* Pathways */}
              <div className="icons">
                <h3>Pathways under this Sefirot</h3>
                <NeighborIcons neighbors={pathwayIcons} fromIndex={fromIndex} />
              </div>
            </div>

            <div className="sectionSefirot">
              <div className="descriptionSefirot">{currentSefirot.formula}</div>
            </div>
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
}
