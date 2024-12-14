// Importing required modules
import express from "express";
import {
  createPlayer,
  getPlayers,
  updatePlayer,
  deletePlayer,
  createTeam,
  getTeams,
  createTournament,
  getTournaments,
  createMatch,
  getMatches,
} from "./sportifyController.js";

const router = express.Router();

// Player routes
router.post("/players", createPlayer); // Create a new player
router.get("/players", getPlayers); // Get all players
router.put("/players/:id", updatePlayer); // Update a player by ID
router.delete("/players/:id", deletePlayer); // Delete a player by ID

// Team routes
router.post("/teams", createTeam); // Create a new team
router.get("/teams", getTeams); // Get all teams

// Tournament routes
router.post("/tournaments", createTournament); // Create a new tournament
router.get("/tournaments", getTournaments); // Get all tournaments

// Match routes
router.post("/matches", createMatch); // Create a new match
router.get("/matches", getMatches); // Get all matches

export default router;
