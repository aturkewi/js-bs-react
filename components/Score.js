const React = require('react')

const Score = ({score, lastResponse}) => (
  <div className='score'>
    <h1>Current score: {score}</h1>
    <p>{lastResponse}</p>
  </div>
)

module.exports = Score