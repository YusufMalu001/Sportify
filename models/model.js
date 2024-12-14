// Import Mongoose
const mongoose = require('mongoose');

// Player Schema
const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, // Reference to Team
    stats: {
        matches: { type: Number, default: 0 },
        runs: { type: Number, default: 0 },
        wickets: { type: Number, default: 0 },
    },
}, { timestamps: true });

// Team Schema
const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }], // Reference to Players
}, { timestamps: true });

// Tournament Schema
const TournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }], // Reference to Teams
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }], // Reference to Matches
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, { timestamps: true });

// Match Schema
const MatchSchema = new mongoose.Schema({
    teamA: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true }, // Reference to Team
    teamB: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true }, // Reference to Team
    date: { type: Date, required: true },
    score: {
        teamA: { type: Number, default: 0 },
        teamB: { type: Number, default: 0 },
    },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, // Reference to winning Team
}, { timestamps: true });

// Exporting Models
const Player = mongoose.model('Player', PlayerSchema);
const Team = mongoose.model('Team', TeamSchema);
const Tournament = mongoose.model('Tournament', TournamentSchema);
const Match = mongoose.model('Match', MatchSchema);

module.exports = { Player, Team, Tournament, Match };
