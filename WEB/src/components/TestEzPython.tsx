import React, { useState, useEffect } from 'react'

function TestPython() {
  const [data, setData] = useState({})

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: number | undefined;

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/resultats');
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/statut');
        const responseData = await response.text();

        if (responseData.includes("UP")) {
          // Le serveur est prêt, donc on peut récupérer les données
          fetchData();
        } else {
          // Le serveur n'est pas encore prêt, on réessaie après un certain délai
          console.log("Serveur indisponible");
          timeoutId = setTimeout(checkServerStatus, 1000); // Attendre 1 seconde avant de vérifier à nouveau
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du statut du serveur', error);
      }
    };

    timeoutId = setTimeout(checkServerStatus, 1000); // Attendre 1 seconde avant de vérifier pour la première fois

    return () => {
      // Nettoyage : annuler le timeout si le composant est démonté avant que le serveur ne soit prêt
      clearTimeout(timeoutId);
    };
  }, []);
/*

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
*/
  return (
    <div className="ml-auto p10">
      <br /> <br /> <br /> <br />
      <p className="p-2">Test Python</p>
      <br /> <br />
      {isLoading ? (
        <p className="p-2"> Loading... </p>
      ) : (
        <>
        {data.resultats.map((resultat, i) => (
          <p className="p-2" key={i}>
            {resultat} <br />
          </p>
        ))}
        {console.log(data)}
      </>
      )}
      

    </div>
  );
}

export default function TestPythonWrapper2() {
  return <TestPython />; {}
}