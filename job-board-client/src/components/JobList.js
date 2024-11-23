// JobList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importer Link pour la navigation
import './JobList';
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/jobs"); // Assurez-vous que l'URL est correcte
        setJobs(res.data); // Mettre à jour les emplois dans le state
      } catch (error) {
        console.error("Erreur de connexion au serveur:", error);
      }
    };
    fetchJobs();
  }, []); // Récupère les emplois au chargement du composant

  return (
    <div>
      <h1>Offres d'emploi</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>
              {/* Utilisation de Link pour naviguer vers les détails du job */}
              <Link to={`/job/${job.id}`}>{job.title}</Link>
            </h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
