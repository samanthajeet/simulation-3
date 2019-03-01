import React, { Component } from 'react';
import Post from '../Post/Post'

class Dahsboard extends Component {
  constructor(props){
    super(props)
    this.state= {
      myPosts: true,
      chkbox: true,
      posts: [{postTitle: 'Title', username: 'username', user_image: 'img', message: 'message1'},
      {postTitle: 'Title', username: 'username', user_image: 'img', message: 'message2'}]
    }
  }

  handleMyPosts = () =>{
    this.setState({
      myPosts: !this.state.myPosts
    })
  }

  render() { 
    const mappedPosts = this.state.posts.map( post => {
      return (
        <Post
          key={post.post}
          title={post.title}
          username={post.username}
          message={post.message}
        />
      )
    })
    console.log(this.state)
    return ( 
      <div>
        <h1>Dashboard Component</h1>
        <input 
          placeholder="search"
        />

        <button>Search</button>
        <button>Reset</button>
        <input 
          type="checkbox"
          value={true}
          defaultChecked={this.state.chkbox}
          onChange={this.handleMyPosts}
          
        /> MyPosts

        {mappedPosts}

      </div>
     );
  }
}
 
export default Dahsboard;