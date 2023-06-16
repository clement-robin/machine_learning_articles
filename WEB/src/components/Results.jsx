import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { info } from '../assets';
import { extract } from '@extractus/article-extractor';

function Results({ title, text, link }) {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [hoveredModel, setHoveredModel] = useState(-1);

  
  if ( (title === '' || text === '') && link === '') {
    return (
      <div className="mt-36 mr-2 ml-2">
        <p>Erreur ! Les deux arguments ne peuvent pas être vides.</p>
      </div>
    );
  }

  useEffect(()=> {
    setLoading(true);
    const fetchData = async () => {
      console.log(link);
      if (link !== '') {
        try {
          const article = await extract(link)
          console.log(article)
        } catch (err) {
          console.error(err)
        }
      }
      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: title, text: text })
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
        <div className="flex justify-center">
          <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="flex">
          {data.map((modele, i) => (
            <div
              key={i}
              className={`flex-1 ${i !== 0 ? 'border-l' : ''} text-center`}
              onMouseEnter={() => setHoveredModel(i)}
              onMouseLeave={() => setHoveredModel(-1)}
            >
              <div className="flex justify-center items-center">
                <h1 className="text-xl">modèle {i}</h1>
                <img
                  src={info}
                  alt="Info Logo"
                  className="w-6 h-6 ml-5"
                />
              </div>
              <div className="ml-8 mb-8 mt-6" style={{ visibility: hoveredModel === i ? 'visible' : 'hidden' }}>
                <div className="flex justify-center items-center">
                  <h2>R2</h2>
                  <h3 className="font-bold text-lg ml-3">
                    <animated.span>{animatedMetrics.r2.to(value => value.toFixed(6))}</animated.span>
                  </h3>
                  <h2 className="ml-4 mr-1">RMSE</h2>
                  <h3 className="font-bold text-lg">
                    <animated.span>{animatedMetrics.rmse.to(value => value.toFixed(0))}</animated.span>
                  </h3>
                </div>
                <div className="flex justify-center items-center">
                  <h2 className="mr-1">MAPE</h2>
                  <h3 className="font-bold text-lg mr-4">
                    <animated.span>{animatedMetrics.mape.to(value => value.toFixed(0))}</animated.span>
                  </h3>
                  <h2 className="mr-1">MAE</h2>
                  <h3 className="font-bold text-lg">
                    <animated.span>{animatedMetrics.mae.to(value => value.toFixed(0))}</animated.span>
                  </h3>
                </div>
              </div>
              <div>
                {modele.fakeOrNot ? (
                  <h1 className="text-7xl text-bold mt-2 mb-16" style={{ color: '#FF0000' }}>FAKE</h1>
                ) : (
                  <h1 className="text-7xl text-bold mt-2" style={{ color: '#00FF00' }}>TRUE</h1>)
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
