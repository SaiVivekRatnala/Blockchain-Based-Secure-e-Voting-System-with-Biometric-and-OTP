import React from 'react';

const Voting = () => {
    const handleVote = (candidateId) => {
        // Add voting logic here
    };

    return (
        <div>
            <h2>Vote for Your Candidate</h2>
            <ul>
                <li>
                    <span>Candidate 1</span>
                    <button onClick={() => handleVote(1)}>Vote</button>
                </li>
                <li>
                    <span>Candidate 2</span>
                    <button onClick={() => handleVote(2)}>Vote</button>
                </li>
            </ul>
        </div>
    );
};

export default Voting;