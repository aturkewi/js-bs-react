const React = require('react');
const LibraryButton = require('./LibraryButton');

const ButtonsContainer = ({selectedLibraries, handleClick}) => (
  <div className="row">
    {selectedLibraries.map((lib, i) => {
      return(
        <div className="col-md-6 text-center">
          <LibraryButton
            name={lib.name} 
            handleClick={handleClick.bind(null, lib.type)}
            key={i}
            />
        </div>
      )
    })}
  </div>
);

module.exports = ButtonsContainer;