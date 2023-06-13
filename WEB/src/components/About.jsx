import { github_black, github_white } from '../assets';
import React, { useState } from 'react';

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default function AboutWrapper() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='mt-20'>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold">Fondamentaux de l‘Apprentissage Automatique - 8INF867 - Travail d’équipe</h1>
      </div>
      <div className="flex mt-16 gap-10">
        <div className="w-1/2 border border-gray-300 p-4 rounded ml-4">
          <h2 className="text-xl font-bold">Sujet</h2>
          <p className='text-justify'>Ce projet d'équipe consiste à créer un modèle de classification en utilisant un dataset de notre choix. Les tâches comprennent la préparation des données, la réduction de dimension, l'utilisation de trois modèles au choix, l'évaluation des modèles et la création d'une interface utilisateur. L'équipe doit effectuer des prétraitements de données, appliquer des techniques de réduction de dimension, entraîner les modèles et évaluer leurs performances. Une interface utilisateur doit permettre de tester de nouveaux objets et afficher les résultats et les métriques de chaque modèle.</p>
        </div>
        <div className="w-1/2 border border-gray-300 p-4 rounded mr-4">
          <h2 className="text-xl font-bold">Réaliser par</h2>
          <ul className="mt-2 py-2 ml-4 mr-4">
            <li className="border-b border-gray-300">Ghita ALAOUI EL HASSANI</li>
            <li className="border-b border-gray-300">Marwane BAHRAOUI</li>
            <li className="border-b border-gray-300">Moad BENSLIMANE</li>
            <li className="border-b border-gray-300">Djamilatou KABRÉ WENDMALGRÉ</li>
            <li>Clément ROBIN</li>
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <div className="border border-gray-300 p-4 rounded mx-4 flex flex-col items-center">
          <h2 className="text-xl font-bold">Titre du rectangle 3</h2>
          <p className="text-justify">Texte du rectangle 3</p>
          <button
            onClick={() => window.open("https://github.com/clement-robin/machine_learning_articles", "_blank")}
            className="p-2 bg-black text-white hover:bg-white hover:text-black rounded flex items-center justify-center gap-2"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img 
              src={isHovered ? github_black : github_white}
              alt="GitHub Logo"
              className="w-6 h-6"
            />
            <span>Github</span>
          </button>
        </div>
      </div>
    </div>
  );
}
