import React, { Component }  from 'react'



class Post extends Component {
  
  render() { 
    return ( 
      <div>
        <h1>Post Component</h1>
        <h2>{this.props.title}</h2>
        <h5>{this.props.username}</h5>
        <p>{this.props.message}</p>
      </div>
     );
  }
}
 
export default Post;