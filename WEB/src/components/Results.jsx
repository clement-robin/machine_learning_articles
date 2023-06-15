import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Results({ title }) {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  if (title === "" || title === ""){
    return (
      <div className="mt-36 mr-2 ml-2">
          <p className=""> Erreur ! Un argument est vide.</p>
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      var data = {
        title: title,
        subject: "le sujet",
        text: "le texte"
      };

      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: title, subject: 'le sujet', text: 'le texte' })
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
  }, []);

  const animatedMetrics = useSpring({
    from: { r2: 0, rmse: 0, mape: 0, mae: 0 },
    to: {
      r2: data[0]?.R2 || 0,
      rmse: data[0]?.RMSE || 0,
      mape: data[0]?.MAPE || 0,
      mae: data[0]?.MAE || 0
    },
    config: { duration: 2000 }
  });

  return (
    <div className="mt-36 mr-2 ml-2">
      {loading ? (
        <p className="">Chargement...</p>
      ) : (
        <div className="flex">
          {data.map((modele, i) => (
            <div key={i} className={`flex-1 ${i !== 0 ? 'border-l' : ''} text-center`}>
              <h1 className="text-xl"> modèle {i}</h1>
              <ul className="ml-8 mb-8">
                <li className="flex items-center mt-4">
                  <h2 className="text-right">R2</h2>
                  <h3 className="font-bold text-lg ml-4">
                    <animated.span>{animatedMetrics.r2.interpolate(value => value.toFixed(6))}</animated.span>
                  </h3>
                </li>
                <li className="inline">
                  <h2 className="font-bold inline">RMSE : </h2>
                  <h3 className="inline">
                    <animated.span>{animatedMetrics.rmse.interpolate(value => value.toFixed(0))}</animated.span>
                  </h3>
                </li>
                <li className="inline ml-8">
                  <h2 className="font-bold inline">MAPE : </h2>
                  <h3 className="inline">
                    <animated.span>{animatedMetrics.mape.interpolate(value => value.toFixed(0))}</animated.span>
                  </h3>
                </li>
                <li className="inline ml-8">
                  <h2 className="font-bold inline">MAE : </h2>
                  <h3 className="inline">
                    <animated.span>{animatedMetrics.mae.interpolate(value => value.toFixed(0))}</animated.span>
                  </h3>
                </li>
              </ul>
              <div className="">
              {modele.fakeOrNot ? (
                <h1 className="text-7xl text-bold mt-4" style={{ color : '#FF0000'}}>FAKE</h1>
                ) : (
                <h1 className="text-7xl text-bold mt-4" style={{ color : '#00FF00'}}>TRUE</h1>) 
              }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
