import React, { useState, useEffect } from 'react';
import './Blob.css'; // Arquivo de estilo para a animação

const paths = [
  "M58.2,-35.7C67.6,-17.4,61.9,7.5,49.7,29.3C37.5,51,18.8,69.4,-1.3,70.2C-21.3,70.9,-42.7,54,-53.5,33.1C-64.2,12.2,-64.4,-12.5,-53.7,-31.6C-43,-50.7,-21.5,-64.2,1.5,-65C24.4,-65.8,48.9,-54.1,58.2,-35.7Z",
  "M54.2,-34C63.5,-15.3,59.5,8.4,48.3,31.1C37.1,53.8,18.5,75.6,-0.4,75.8C-19.2,76,-38.5,54.7,-52.4,30.4C-66.3,6.2,-74.8,-21,-65.2,-39.9C-55.6,-58.9,-27.8,-69.7,-2.7,-68.1C22.5,-66.6,45,-52.8,54.2,-34Z",
  "M59.5,-34.4C72.1,-12.5,73.9,15.6,62.2,34.3C50.5,53,25.2,62.3,1.9,61.2C-21.4,60.1,-42.7,48.5,-54.4,29.9C-66.1,11.2,-68.1,-14.7,-57.4,-35.4C-46.7,-56.2,-23.4,-71.8,0,-71.8C23.4,-71.9,46.9,-56.2,59.5,-34.4Z",
  "M69.8,-38.6C82.2,-18.9,78.3,12,63.9,34.9C49.6,57.7,24.8,72.6,0.8,72.1C-23.2,71.6,-46.4,55.9,-56.1,35.7C-65.9,15.5,-62.2,-9.2,-50.6,-28.4C-39,-47.6,-19.5,-61.5,4.6,-64.1C28.7,-66.8,57.4,-58.3,69.8,-38.6Z",
  "M66.5,-40.9C76.7,-20.8,68.9,7.3,54.8,26C40.7,44.8,20.4,54.4,-1,55C-22.4,55.6,-44.8,47.2,-54.6,30.9C-64.4,14.6,-61.6,-9.7,-50.4,-30.4C-39.2,-51.1,-19.6,-68.2,4.3,-70.7C28.2,-73.2,56.3,-61,66.5,-40.9Z"
];

export const Blob = () => {
  const [pathIndex, setPathIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPathIndex((prevIndex) => (prevIndex + 1) % paths.length); // Alternar entre os índices dos paths
    }, 3000); // Intervalo de mudança de path em milissegundos (3 segundos)

    return () => clearInterval(interval); // Limpar intervalo quando o componente é desmontado
  }, []);

  return (
    <div className='w-full h-[30vh] flex justify-center'>
      <svg id="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
        <path fill="#FF0066" d={paths[pathIndex]} />
      </svg>
    </div>
  );
}



