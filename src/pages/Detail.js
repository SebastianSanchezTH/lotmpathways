import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Data } from "../components/Data";
import BackButton from "../components/BackButton";
import ArrowNavigation from "../components/ArrowNavigation";
import ScrollableContainer from "../components/ScrollableContainer";
import NeighborIcons from "../components/NeighborIcons";

import "../styles/Detail.css";
import "../styles/ArrowNavigation.css";
import "../styles/BackButton.css";

export default function Detail() {
  const { id } = useParams();
  const data = Data[id]; // Obtener información de carousel e imagenes
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();
  const [hoveredNeighbor, setHoveredNeighbor] = useState(null);
  const [hoveredSefirot, setHoveredSefirot] = useState(null);
  const currentId = parseInt(id);

  const location = useLocation();
  const fromIndex = location.state?.fromIndex ?? 0;

  // Manejar en caso de que no encuentre data
  if (!data) return <p>Información no encontrada</p>;

  return (
    <div className="detail-background">
      {/* Boton de volver */}
      <BackButton to="/" label="x" state={{ restoreIndex: fromIndex }} />

      {/* Flechas como componente independiente */}
      <ArrowNavigation currentId={currentId} dataLength={Data.length} />

      {/* Overlay para combiod de color de fondo */}
      <div
        className="detail-overlay"
        style={{ backgroundColor: data.overlayColor }}
      />
      <div className="detail-logo">
        {/* Logo de la secuencia */}
        <img src={data.logoColor} alt="Logo" />
      </div>
      <div className="detail-title">
        {/* Titulo del camino */}
        <h1>{data.title}</h1>
      </div>
      <div className="detail-content">
        <div className="detail-card-image">
          {/* Carta a la izquierda */}
          <div className="detail-card">
            <img src={data.card} alt="Card" />
          </div>
        </div>

        <div className="detail-text">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {data.sequences.map((seq, idx) => (
                <div className="embla__slides" key={idx}>
                  {/* Titulo de la secuencia*/}
                  <h2>{seq.seqTitle}</h2>
                  <ScrollableContainer>
                    {/* Descripcion de la secuencia */}
                    <div className="section">
                      <div className="traits">{seq.traits}</div>
                      {/* Titulo de Secuencias intercambiables*/}
                      <h2>Neighboring Pathways</h2>

                      <NeighborIcons
                        neighbors={data.neighbors}
                        fromIndex={fromIndex}
                      />

                      {/* Icono del sefirot */}
                      <h2>Related Sefirot</h2>
                      <div className="detail-sefirot">
                        {data.sefirot ? (
                          <div className="sefirot-icon">
                            <img
                              src={data.sefirot.image}
                              alt={`Sefirot ${data.sefirot.id}`}
                              className="sefirot-icon"
                              onClick={() =>
                                navigate(`/sefirot/${data.sefirot.id}`, {
                                  state: { fromIndex },
                                })
                              }
                            />
                          </div>
                        ) : (
                          <p className="no-neighbors">None</p>
                        )}
                      </div>
                    </div>
                    {/* Descripcion de la pocion */}
                    <div className="section">
                      <div className="description">{seq.description}</div>
                    </div>
                  </ScrollableContainer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
