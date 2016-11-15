const React = require('react');
const LibraryButton = require('./LibraryButton');

class App extends React.Component {
  constructor(){
    super();
        
    this.selectRandomLibraries = this.selectRandomLibraries.bind(this);
    this.randomFromArray = this.randomFromArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      score: 0,
      realLibraries: [],
      fakeLibraries: [],
      selectedLibraries: [],
      lastResponse: ''
    }
  }
  
  componentWillMount(){
    fetch('https://js-or-bs-server.herokuapp.com/fake_libraries')
      .then(res => res.json())
      .then(fake_libs => this.setState(
        {fakeLibraries: fake_libs.fake_libraries.map(lib =>{
          return Object.assign({}, lib, {type: 'fake'})
        })}
      ));
    fetch('https://js-or-bs-server.herokuapp.com/libraries')
      .then(res => res.json())
      .then(libs => this.setState(
        {realLibraries: libs.library.map(lib =>{
          return Object.assign({}, lib, {type: 'real'})
        })},
        this.selectRandomLibraries
      ));
  }
  
  randomFromArray(libArray){
    return libArray[Math.floor(Math.random() * libArray.length)]
  }
  
  selectRandomLibraries() {
    let randFake = this.randomFromArray(this.state.fakeLibraries);
    let randReal = this.randomFromArray(this.state.realLibraries);
    var shuffledLibraries = Math.random() > .5 ? [randFake, randReal] : [randReal, randFake]
    this.setState({selectedLibraries: shuffledLibraries})
  }
  
  handleClick(libType){
    if (libType == 'real'){
      this.setState({
        score: (this.state.score + 1),
        lastResponse: 'Correct!'
      })
    }else if (libType == 'fake') {
      this.setState({lastResponse: 'WRONG!'})
    }else{
      this.setState({lastResponse: 'neither right, nor wrong?'})
    }
    this.selectRandomLibraries();
  }
  
  render() {
    return (
      <div className="app">
        Current score: {this.state.score}
        <p>{this.state.lastResponse}</p>
        <ul>
          {this.state.selectedLibraries.map((lib, i) => {
            return(
              <LibraryButton 
                name={lib.name} 
                handleClick={this.handleClick.bind(null, lib.type)}
                key={i}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

module.exports = App;
