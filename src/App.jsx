import React, { useState } from "react";

export default function BetterTogetherApp() {
  const [teams, setTeams] = useState([
    { name: "Team A", members: ["Ash"], totalLoss: 0 },
    { name: "Team B", members: ["Jordan"], totalLoss: 0 }
  ]);
  const [newWeight, setNewWeight] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(0);

  const updateLoss = () => {
    const updatedTeams = [...teams];
    updatedTeams[selectedTeam].totalLoss += parseFloat(newWeight) || 0;
    setTeams(updatedTeams);
    setNewWeight("");
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Better Together: Weight Loss Challenge</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {teams.map((team, index) => (
          <div key={index} style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', width: '250px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{team.name}</h2>
            <p style={{ color: '#555' }}>Members: {team.members.join(", ")}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Total Loss: {team.totalLoss.toFixed(1)} kg</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '1rem', marginTop: '2rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', maxWidth: '300px', margin: '2rem auto' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Add Weekly Weight Loss</h3>
        <select value={selectedTeam} onChange={(e) => setSelectedTeam(parseInt(e.target.value))} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}>
          {teams.map((team, index) => (
            <option key={index} value={index}>{team.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Weight lost (kg)"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <button onClick={updateLoss} style={{ width: '100%', background: '#007bff', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Update Team</button>
      </div>
    </div>
  );
}
