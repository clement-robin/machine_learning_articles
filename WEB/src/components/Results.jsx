import React, { useState, useEffect } from 'react';

function Results({ title }) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/recherche/" + title);
        const responseData = await response.text();
        setData(responseData);
        setLoading(false);
        console.log(responseData);
      } catch (error) {
        console.error('Erreur lors de la prédiction du modèle', error);
      }
    };

    fetchData();
  }, [title]);

  return (
    <div className="ml-auto p10">
      {loading ? (
        <p className="">Chargement...</p>
      ) : (
        <p className="">La prédiction nous dit que {title} est {data}</p>
      )}
    </div>
  );
}

export default Results;
