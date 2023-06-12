import React, { useState, useEffect } from 'react'

function TestPython() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/resultats")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des résultats:", error);
      });
  }, []);

  return (
    <div className="ml-auto p10">
      <br /> <br /> <br /> <br />
      <p className="p-2">Test Python</p>
      <br /> <br />
      {(typeof data.resultats === 'undefined') ? (
        <p className="p-2"> Loading... </p>
      ) : (
        data.resultats.map((resultat, i) => (
          <p className="p-2" key={i}>{resultat} <br /></p>
        ))
      )}

    </div>
  );
}

export default function TestPythonWrapper2() {
  return <TestPython />; {}
}