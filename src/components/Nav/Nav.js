import React from 'react';
import {connect} from 'react-redux'

function Nav(props){
  // console.log(props)
  if(props.location.pathname !== '/'){
    return (
      <div>
        <h1>{props.username}</h1>
        <img src={props.user_image} alt={props.username} style={{"width": 200}} />
        <button onClick={() => props.history.push('/dashboard')} >Home</button>
        <button onClick={() => props.history.push('/new')}>New Post</button>
        <button onClick={() => props.history.push('/')} >Logout</button>

      </div>
    )
  }
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (reduxState) => {
  const {username, user_image, id} = reduxState
  return {
    username,
    user_image,
    id,
  }
}

export default connect(mapStateToProps)(Nav)