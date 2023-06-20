import React, { useState, useEffect } from 'react';

export default function Stats() {
  const values = [
    {
      modele: "Random Forest",
      mae: 0.0023386392054114886,
      rmse: 0.048212085143867114,
      mape: 571758851444336.8,
      r2: 0.9906251178897355,
    },
    {
      modele: "Arbre de Décision",
      mae: 0.006035903603723997,
      rmse: 0.07766871441156412,
      mape: 1253841938218433.2,
      r2: 0.9758052689926363,
    },
    {
      modele: "SVM",
      mae: 0.007884538286783377,
      rmse: 0.08879350544799902,
      mape: 2086392985195472.5,
      r2: 0.968392359455363,
    },
    {
      modele: "LSTM",
      mae: 0.00249247208278832,
      rmse: 0.04813807817803971,
      mape: 420540768274963.56,
      r2: 0.9907191165269033,
    },
    {
      modele: "CNN",
      mae: 0.99999999999999999,
      rmse: 0.99999999999999999,
      mape: 99999999999999999.99,
      r2: 0.99999999999999999,
    },
  ];

  const firstRow = values.slice(0, 3);
  const secondRow = values.slice(3);


  const [animatedValues, setAnimatedValues] = useState(values.map(value => ({...value, mae: 0, rmse: 0, mape: 0, r2: 0 })));

  useEffect(() => {
    const step = 20; // en millisecondes
    const totalTime = 2000; // 2 secondes
    const totalSteps = totalTime / step;
    
    const interval = setInterval(() => {
      setAnimatedValues(animatedValues => animatedValues.map((animatedValue, index) => {
        const targetValue = values[index];
        return {
          ...animatedValue,
          mae: animatedValue.mae + (targetValue.mae / totalSteps),
          rmse: animatedValue.rmse + (targetValue.rmse / totalSteps),
          mape: animatedValue.mape + (targetValue.mape / totalSteps),
          r2: animatedValue.r2 + (targetValue.r2 / totalSteps),
        };
      }));
    }, step);
    
    setTimeout(() => clearInterval(interval), totalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold" style={{ color: '#6B8915' }}>
          Métriques de l'entraînement des modèles
        </h1>
      </div>
      <div className="ml-8 mb-8 mt-32">
        <div className="flex justify-center items-center gap-8">
          {firstRow.map((value, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="border-l-2 h-8 mx-4 border-[#6B8915]"></div>}
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-xl font-bold text-[#6B8915]">{value.modele}</h2>
                <div className="flex justify-center items-center">
                  <h2>R2</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index]?.r2?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">RMSE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index]?.rmse?.toFixed(5)}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <h2>MAPE</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index]?.mape?.toExponential(5)}</h3>
                  <h2 className="ml-4 mr-1">MAE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index]?.mae?.toFixed(5)}</h3>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center mt-16 gap-8">
          {secondRow.map((value, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="border-l-2 h-8 mx-4 border-[#6B8915]"></div>}
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-xl font-bold text-[#6B8915]">{value.modele}</h2>
                <div className="flex justify-center items-center">
                  <h2>R2</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index + 3]?.r2?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">RMSE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index + 3]?.rmse?.toFixed(5)}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <h2>MAPE</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index + 3]?.mape?.toExponential(5)}</h3>
                  <h2 className="ml-4 mr-1">MAE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index + 3]?.mae?.toFixed(5)}</h3>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
