
let initialState = {
  username: '',
  password: '',
  user_image:'',
  id: 0

}

export default function reducer(state=initialState, action){
  const {type, payload} = action;
  switch(type){
    default:
      return state;
  }

}