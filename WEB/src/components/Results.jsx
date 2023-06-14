import React, { useState, useEffect } from 'react';

function Results({ title }) {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      var data = {
        title: title,
        subject: category,
        text: text
      };

      try {
        const requestOptions = {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        const response = await fetch("http://localhost:5000/recherche", requestOptions);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        console.log(responseData);
      } catch (error) {
        console.error('Erreur lors de la prédiction du modèle', error);
      }
    };

    fetchData();
    return;
  }, []);

  return (
    <div className="mt-28 mr-2 ml-2">
      <hr></hr>
      {loading ? (
        <p className="">Chargement...</p>
      ) : (
        data
        .map((modele, i) => (
        <div key={i}>
          <p className="">La prédiction du modele {i} nous dit que {title} est {modele.fakeOrNot ? "faux" : "vrai"}.</p>
          <ul>
              <li >R2 : {modele.R2}</li>
              <li >RMSE : {modele.RMSE}</li>
              <li >MAPE : {modele.MAPE}</li>
              <li >MAE : {modele.MAE}</li>
          </ul>
        </div>
        ))
      )}
    </div>
  );
}

export default Results;
