import React, { useState, useEffect } from 'react'

function CheckStatus() {
  const [isUp, setIsUp] = useState(false)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/statut'); // dev environnement
        const responseData = await response.text();
        setIsUp(responseData.includes("UP"))
        if (isUp) {
          // Le serveur est up
          console.log("Serveur up");
        } else {
          // Le serveur n'est pas up
          console.log("Serveur indisponible");
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la vérification du statut du serveur', error);
      }
    };

    checkServerStatus();
  }, []);
  
  return (
    <div className="ml-auto p10">
      <br /> <br /> <br /> <br />
      <p className="p-2">Statut du serveur</p>
      <br /> <br />
      {isLoading ? (
        <p className="p-2"> Connexion en cours... </p>
      ) : (
          isUp ? (
            <p className="p-2"> Le serveur est up ! </p>
          ) : (
            <p className="p-2"> Le serveur ne semble pas être présent. Veuillez vérifier que vous avez bien mis le bon url et lancé le serveur avec python, puis rafraichissez cette page. </p>
          )
      )}
      

    </div>
  );
}

export default function CheckServerStatus() {
  return <CheckStatus />; {}
}