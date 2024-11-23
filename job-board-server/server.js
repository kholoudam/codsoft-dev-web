// job-board-server/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Exemple de tableau de données statiques pour les emplois
const jobs = [
  { id: 1, title: "Développeur Frontend", company: "Tech Corp", description: "Travailler avec React." },
  { id: 2, title: "Développeur Backend", company: "Soft Solutions", description: "Expérience avec Node.js." },
  { id: 3, title: "Développeur Fullstack", company: "Innovative Solutions", description: "Maîtrise des technologies frontend et backend." }
];

// Route pour récupérer tous les emplois
app.get("/jobs", (req, res) => {
  res.json(jobs); // Retourne le tableau d'emplois statiques
});

// Route pour récupérer un emploi par ID
app.get("/jobs/:id", (req, res) => {
  const job = jobs.find((job) => job.id === parseInt(req.params.id)); // Cherche l'emploi par ID
  if (!job) {
    return res.status(404).json({ message: "Emploi non trouvé" }); // Si l'emploi n'existe pas, retourne une erreur 404
  }
  res.json(job); // Retourne l'emploi trouvé
});

// Route pour créer un nouvel emploi (pas de persistance dans ce cas)
app.post("/jobs", (req, res) => {
  const { title, company, description } = req.body;
  const newJob = {
    id: jobs.length + 1, // Nouveau ID basé sur la longueur du tableau
    title,
    company,
    description
  };
  jobs.push(newJob); // Ajoute le nouvel emploi au tableau
  res.status(201).json(newJob); // Retourne l'emploi créé
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));