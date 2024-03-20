import React, { useState, useRef } from 'react';
import Rendu from '../rendu/rendu';
import html2canvas from 'html2canvas';

const Formulaire = () => {
    const [nombreA, setNombreA] = useState('');
    const [nombreB, setNombreB] = useState('');

    const [confirmed, setConfirmed] = useState(false);
    const printRef = useRef(null);

    const handleNombreChange = (e, setter) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
          setter(inputValue);
        }
    };

    const handleConfirmation = () => {
        setConfirmed(!confirmed);
    };

    const handleDownload = async () => {
        const element = printRef.current;

        if (element) {
            setTimeout(async () => {
                const canvas = await html2canvas(element);
                const data = canvas.toDataURL('image/jpeg');
                const link = document.createElement('a');

                if (typeof link.download === 'string') {
                    link.href = data;
                    link.download = 'image.jpg';

                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    window.open(data);
                }
            }, 700); 
        } else {
            console.error('printRef is not a valid element');
        }
    };
      
    return (
        <>
            <div>
            <div>
                <label>Nombre A</label>
                <input type='text' value={nombreA} onChange={(e) => handleNombreChange(e, setNombreA)} />
            </div>
            <div>
                <label>Nombre B</label>
                <input type='text' value={nombreB} onChange={(e) => handleNombreChange(e, setNombreB)} />
            </div>
            <button onClick={handleConfirmation}>OK</button>
            </div>

            {(confirmed && nombreA !== '' && nombreB !== '') && (
                <>
                    <div ref={printRef}>
                        <Rendu ligne={nombreA} colonne={nombreB} />
                    </div>
                    <button onClick={handleDownload}>Télécharger</button>
                </>
            )}
        </>
    );
};

export default Formulaire;
