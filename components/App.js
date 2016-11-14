const React = require('react');

class App extends React.Component {
  constructor(){
    super();
        
    this.state = {
      score: 0,
      realLibraries: [],
      fakeLibraries: []
    }
  }
  
  componentWillMount(){
    fetch('https://js-or-bs-server.herokuapp.com/fake_libraries')
      .then(res => res.json())
      .then(fake_libs => this.setState(fake_libs));
    fetch('https://js-or-bs-server.herokuapp.com/libraries')
      .then(res => res.json())
      .then(libs => this.setState({realLibraries: libs.library}));
  }
  
  render() {
    return (
      <div className="app">
        I am an app
      </div>
    );
  }
}

module.exports = App;
