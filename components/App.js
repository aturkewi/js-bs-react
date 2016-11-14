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
    // fetch('https://js-or-bs-server.herokuapp.com/libraries')
    //   .then(res2 => res2.json())
    //   .then(libraries => {
    //     this.setState(libraries)
    //   })
  }
  
  render() {
    return (
      <div className="app">
        I am an app
        {console.log(this.state)}
        <ul>
          // {this.state.fake_libraries.map(library => <li>{library.name}</li>)}
        </ul>
      </div>
    );
  }
}

module.exports = App;
