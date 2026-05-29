import React, { useState } from 'react';
import './App.css';

function App() {
  const initialVotes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  const [votes, setVotes] = useState(initialVotes);

  const candidates = [
    { id: 1, name: 'Rahul Gandhi', party: 'Congress', symbol: '✋' },
    { id: 2, name: 'Arvind Kejriwal', party: 'AAP', symbol: '🧹' },
    { id: 3, name: 'Mamata Banerjee', party: 'TMC', symbol: '🌸' },
    { id: 4, name: 'Narendra Modi', party: 'BJP', symbol: '🪷' },
    { id: 5, name: 'Akhilesh Yadav', party: 'SP', symbol: '🚲' }
  ];

  const handleVote = (id) => {
    setVotes({
      ...votes,
      [id]: votes[id] + 1
    });
  };

  const handleReset = () => {
    setVotes(initialVotes);
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <div className="header">
          <div className="ballot-icon">🗳️</div>
          <h1>Voting Application</h1>
        </div>

        <div className="card">
          <table className="voting-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Candidate Name</th>
                <th>Party</th>
                <th>Symbol</th>
                <th>Vote</th>
                <th>Vote Count</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>{candidate.symbol}</td>
                  <td>
                    <button 
                      className="vote-btn" 
                      onClick={() => handleVote(candidate.id)}
                    >
                      Vote
                    </button>
                  </td>
                  <td>{votes[candidate.id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="reset-container">
            <button className="reset-btn" onClick={handleReset}>
              Reset Votes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
