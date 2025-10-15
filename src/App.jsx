import React, { useState } from "react";

export default function BetterTogetherApp() {
  const [teams, setTeams] = useState([
    { name: "Team A", members: ["Ash"], totalLoss: 0 },
    { name: "Team B", members: ["Jordan"], totalLoss: 0 }
  ]);
  const [newWeight, setNewWeight] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [newTeamName, setNewTeamName] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  const [selectedTeamForMember, setSelectedTeamForMember] = useState(0);

  // Add weekly weight loss
  const updateLoss = () => {
    const updatedTeams = [...teams];
    updatedTeams[selectedTeam].totalLoss += parseFloat(newWeight) || 0;
    setTeams(updatedTeams);
    setNewWeight("");
  };

  // Add new team
  const addTeam = () => {
    if (newTeamName.trim() === "") return;
    setTeams([...teams, { name: newTeamName.trim(), members: [], totalLoss: 0 }]);
    setNewTeamName("");
  };

  // Add new member to selected team
  const addMember = () => {
    if (newMemberName.trim() === "") return;
    const updatedTeams = [...teams];
    updatedTeams[selectedTeamForMember].members.push(newMemberName.trim());
    setTeams(updatedTeams);
    setNewMemberName("");
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Better Together: Weight Loss Challenge
      </h1>

      {/* Teams Display */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {teams.map((team, index) => (
          <div key={index} style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', width: '250px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{team.name}</h2>
            <p style={{ color: '#555' }}>Members: {team.members.join(", ") || "No members yet"}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Total Loss: {team.totalLoss.toFixed(1)} kg</p>
          </div>
        ))}
      </div>

      {/* Add Weight */}
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

      {/* Add New Team */}
      <div style={{ background: 'white', padding: '1rem', marginTop: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', maxWidth: '300px', margin: '1rem auto' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Add New Team</h3>
        <input
          type="text"
          placeholder="Team Name"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <button onClick={addTeam} style={{ width: '100%', background: '#28a745', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add Team</button>
      </div>

      {/* Add New Member */}
      <div style={{ background: 'white', padding: '1rem', marginTop: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', maxWidth: '300px', margin: '1rem auto' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Add New Member</h3>
        <select value={selectedTeamForMember} onChange={(e) => setSelectedTeamForMember(parseInt(e.target.value))} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}>
          {teams.map((team, index) => (
            <option key={index} value={index}>{team.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Member Name"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <button onClick={addMember} style={{ width: '100%', background: '#ffc107', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add Member</button>
      </div>
    </div>
  );
}
