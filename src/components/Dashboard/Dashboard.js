import React, { Component } from 'react';
import Post from '../Post/Post';
import {connect} from 'react-redux';
import axios from 'axios';

class Dahsboard extends Component {
  constructor(props){
    super(props)
    this.state= {
      myPosts: true,
      chkbox: true,
      id: 0,
      search: '',
      posts: []
    }
  }


  componentDidMount(){
    this.getPosts()
    this.updateUserId()
  }

  updateUserId(){
    if(this.state.myPosts){
      this.setState({
        id: this.props.id
      }) 
    } else {
      this.setState({
        id: 0
      })
    }
  }

  getPosts(){
    const {id} = this.state
    axios.get(`/posts/allPosts/${id}`).then( response =>{
      this.setState({
        posts: response.data
      })
    })
  }

  searchPosts =() =>{
    console.log(this.state.search)
    axios.get(`/posts/searchPosts?search=${this.state.search}`).then( response => {
      this.setState({
        posts: response.data
      })
    })
  }

  reset = () => {
    this.getPosts()
  }


  handleMyPosts = () =>{
    this.setState({
      myPosts: !this.state.myPosts
    })
  }

  handleInput = (prop, val) => {
    this.setState({
      [prop] :val
    })
  }

  render() { 
    const mappedPosts = this.state.posts.map( post => {
      return (
          <div key={post.post} style={{"border": "1px solid pink", "margin": 2}} >
          <h2>{post.post_title}</h2>
          <h5>{post.username}</h5>
          <img src={post.user_image} alt={this.props.username} style={{"width": 50}} />
          <p>{post.post}</p>
          </div>
      )
    })

    return ( 
      <div>
        <h1>Dashboard Component</h1>
        <input 
          onChange={(e) => this.handleInput('search', e.target.value)}
          placeholder="search"
        />

        <button onClick={this.searchPosts} >Search</button>
        <button onClick={this.reset} >Reset</button>
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

const mapStateToProps = (reduxState) => {
  const {id} = reduxState
  return{
    id
  }
}
 
export default connect(mapStateToProps)(Dahsboard);