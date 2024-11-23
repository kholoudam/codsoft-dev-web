// JobDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Utilisation de useParams pour obtenir l'ID de l'URL
import axios from "axios";
import './JobDetail';
const JobDetail = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams(); // Récupère l'ID du job depuis l'URL

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/jobs/${id}`); // Appelle l'API pour obtenir le job par ID
        setJob(res.data); // Met à jour le state avec les données de l'emploi
      } catch (error) {
        console.error("Erreur lors de la récupération de l'emploi:", error);
      }
    };
    fetchJob();
  }, [id]); // Rafraîchit quand l'ID change

  if (!job) {
    return <div>Chargement...</div>; // Affiche un message de chargement tant que l'emploi n'est pas récupéré
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;
