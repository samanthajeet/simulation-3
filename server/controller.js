

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

  }
}