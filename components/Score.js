const React = require('react')

const Score = ({score, lastResponse}) => (
  <div className='score row text-center'>
    <div className="col-md-12">
      <h1>Current score: {score}</h1>
      <p>{lastResponse}</p>
    </div>
  </div>
)

module.exports = Score