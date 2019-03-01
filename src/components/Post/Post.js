import React, { Component }  from 'react'



class Post extends Component {
  
  render() { 
    return ( 
      <div>
        <h1>Post Component</h1>
        <h2>{this.props.title}</h2>
        <h5>{this.props.username}</h5>
        <img src={this.props.userImage} alt={this.props.username} style={{"width": 50}} />
        <p>{this.props.message}</p>
      </div>
     );
  }
}
 
export default Post;