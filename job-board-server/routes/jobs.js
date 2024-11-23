const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/auth");

const router = express.Router();

// Créer une offre d'emploi (employeur)
router.post("/", auth, async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de l'offre" });
  }
});

// Obtenir toutes les offres d'emploi
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des offres" });
  }
});

module.exports = router;