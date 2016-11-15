const React = require('react')

class LibraryButton extends React.Component{
  render(){
    return(
      <button onClick={this.props.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

module.exports = LibraryButton
