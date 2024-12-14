// Importing Models
import { Player, Team, Tournament, Match } from "./models.js";

// Controller for Player Management
export const createPlayer = async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ message: "Error creating player", error });
    }
};

export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate("team");
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: "Error fetching players", error });
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: "Error updating player", error });
    }
};

export const deletePlayer = async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Player deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting player", error });
    }
};

// Controller for Team Management
export const createTeam = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: "Error creating team", error });
    }
};

export const getTeams = async (req, res) => {
    try {
        const teams = await Team.find().populate("players");
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: "Error fetching teams", error });
    }
};

// Controller for Tournament Management
export const createTournament = async (req, res) => {
    try {
        const tournament = await Tournament.create(req.body);
        res.status(201).json(tournament);
    } catch (error) {
        res.status(500).json({ message: "Error creating tournament", error });
    }
};

export const getTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.find().populate(["teams", "matches"]);
        res.status(200).json(tournaments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tournaments", error });
    }
};

// Controller for Match Management
export const createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        res.status(500).json({ message: "Error creating match", error });
    }
};

export const getMatches = async (req, res) => {
    try {
        const matches = await Match.find().populate(["teamA", "teamB", "winner"]);
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: "Error fetching matches", error });
    }
};
