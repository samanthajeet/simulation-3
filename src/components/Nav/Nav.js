import React from 'react';

export default function Nav(props){
  if(props.location.pathname !== '/'){
    return (
      <div>
        <h1>navigation</h1>
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