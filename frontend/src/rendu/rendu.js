import React from "react";

const Rendu = ({ ligne, colonne }) => {

  const lignes = [];
  for (let i = 0; i < ligne; i++) {
    const colonnes = [];
    for (let j = 0; j < colonne; j++) {
      const colorClass = (i + j) % 2 === 0 ? "noir" : "blanc";
      colonnes.push(<td key={`${i}-${j}`} className={colorClass}></td>);
    }
    lignes.push(<tr key={i}>{colonnes}</tr>);
  }

  return (
    <div>
      <div>
        <table>
            <tbody>{lignes}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Rendu;
