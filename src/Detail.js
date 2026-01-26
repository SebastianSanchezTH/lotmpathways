import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Detail.css"; // Tu CSS sigue igual

// -----------------------------
// Datos de los roles y secuencias
// -----------------------------
const iconData = [
  {
    title: "Sequence 0 - The Fool",
    logoColor: require("./assets/iconColor/0_Color.png"),
    card: require("./assets/cards/0_Card.webp"),
    overlayColor: "rgba(41, 1, 64, 0.56)",
    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: (
          <>
            <strong>Potion Formula</strong>
            <p>Main Ingredients:</p>
            <ul>
              <li>10 milliliters Lavos Squid's Blood</li>
              <li>50-gram Star Crystal</li>
              <li>Or A Seer Beyonder Characteristic</li>
            </ul>
            <p>Supplementary Ingredients:</p>
            <ul>
              <li>13 drops of Night Vanilla Liquids</li>
              <li>7 Gold Mint Leaves</li>
              <li>3 drops of Poison Hemlock</li>
              <li>9 grams of Dragon Blood Grass Powder</li>
            </ul>
          </>
        ),
        card: require("./assets/cards/0_Card.webp"),
      },
      {
        seqTitle: "Sequence 8 - Magician",
        description: <>Descripción de la secuencia 8...</>,
        card: require("./assets/cards/0_Card.webp"),
      },
      // ... hasta la secuencia 0
    ],
  },
  {
    title: "Sequence 1 - The Magician",
    logoColor: require("./assets/iconColor/1_Color.png"),
    card: require("./assets/cards/1_Card.webp"),
    sequences: [
      {
        seqTitle: "Sequence 9 - Seer",
        description: <>Descripción del rol 1, secuencia 9...</>,
        card: require("./assets/cards/1_Card.webp"),
      },
      // ... otras secuencias
    ],
  },
  // ... hasta los 22 roles
];

// -----------------------------
// Componente DetailPage
// -----------------------------
export default function DetailPage() {
  const { id } = useParams();
  const data = iconData[id]; // Obtener info del icono
  const [currentSeq, setCurrentSeq] = useState(0);

  if (!data) return <p>Información no encontrada</p>;

  const nextSequence = () => {
    setCurrentSeq((prev) => (prev + 1) % data.sequences.length);
  };

  const prevSequence = () => {
    setCurrentSeq((prev) =>
      prev === 0 ? data.sequences.length - 1 : prev - 1,
    );
  };

  const sequenceData = data.sequences[currentSeq];

  return (
    <div
      className="detail-background"
      style={{
        backgroundColor: data.overlayColor, // overlay dinámico según logo
        backdropFilter: "blur(6px)", // efecto blur para ver página anterior
      }}
    >
      {/* Logo */}
      <div className="detail-logo">
        <img src={data.logoColor} alt="Logo" />
      </div>

      <div className="detail-content">
        {/* Carta */}
        <div className="detail-card">
          <img src={sequenceData.card} alt="Carta relacionada" />
        </div>

        {/* Texto y títulos */}
        <div className="detail-text">
          <h1>{data.title}</h1>
          <h2>{sequenceData.seqTitle}</h2>
          <div className="detail-description">{sequenceData.description}</div>

          {/* Carousel vertical */}
          <div className="carousel-controls">
            <button onClick={prevSequence}>⬆️</button>
            <span>
              {currentSeq + 1} / {data.sequences.length}
            </span>
            <button onClick={nextSequence}>⬇️</button>
          </div>
        </div>
      </div>
    </div>
  );
}
