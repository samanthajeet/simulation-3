
let initialState = {
  username: '',
  password: '',
  user_image:'',
  id: 0

}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(id, username, user_image){
  return {
    type: UPDATE_USER,
    payload: id, username, user_image
  }
}

export default function reducer(state=initialState, action){
  const {type, payload} = action;
  switch(type){
    case UPDATE_USER:
      const {id, username, user_image} = payload
      return {...state, id, username, user_image }
    default:
      return state;
  }
}
