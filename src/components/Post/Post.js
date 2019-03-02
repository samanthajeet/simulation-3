import React, { Component }  from 'react'
import Axios from 'axios';



class Post extends Component {
  constructor(props){
    super(props);
    this.state= {
      post: {}
    }
  }

  componentDidMount(){
    Axios.get(`/posts/${this.props.match.params.post_id}`).then( response =>{
      this.setState({
        post: response.data
      })
    })
  }
  
  
  render() { 
    console.log(this.props.match)
    console.log(this.state.post)
    const {post} = this.state
    return ( 
      <div>
        <h1>Post Component</h1>
        <h2>{post.post_title}</h2>
        <div style={{"display": "flex","alignItems": "center", "justifyContent": "center"}}>
          <h5>{post.username}</h5>
          <img src={post.user_image} alt={this.props.username} style={{"width": 50, "borderRadius": "50%", "marginLeft": 5}} />
        </div>

        <p>{post.post}</p>


      </div>
     );
  }
}
 
export default Post;