

module.exports = {
  register: async (req, res) =>{
    const {username, password} = req.body
    const db = req.app.get('db')
    
    let user = await db.create_user({username, password})
    user = user[0]
    res.status(200).send(user)
  },

  login: async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')

    let user = await db.check_user({username, password})
    user = user[0]
    if (!user) {
      return res.sendStatus(409)
    }

    res.status(200).send(user)
  },
  
  getAllPosts: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    // if(id) {
    //   db.posts_excluding_auth({id}).then( post => {
    //     return res.status(200).send(post)
    //   })
    // }

    db.get_posts().then(post => {
      res.status(200).send(post)
    })

  },

  getPost: (req, res) => {
    const {post_id} = req.params;
    const db = req.app.get('db')

    db.get_post({post_id}).then( post => {
      res.status(200).send(post[0])
    }).catch(err => {
      res.status(500).send(err);
    });
  },


  searchAllPosts: (req, res) => {
    console.log('searching')
    const db = req.app.get('db')

    let {search} = req.query

    console.log({search})

    db.search_all_posts({search}).then( post => {
      res.status(200).send(post)
    }).catch(err => {
      console.log(err)
      res.status(501).send(err);
    });
  }
}