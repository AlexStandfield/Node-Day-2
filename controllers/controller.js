const users = require('../data')

const getUsers = (req, res) => {
      res.status(200).send(users)
  }
const getUserByQuery = (req, res) => {
        const {id} = req.query
        const foundUser = users.filter((user) => {
            if(user.id === +id){
                return user
            }
        })
        res.status(200).send(foundUser[0])
    }
const getU = (req, res) => {
        // destructure id from.params
        const {id} = req.params
        // loop through users to find user with matching id
        for(let i = 0; i < users.length; i++){
            if(users[i].id === +id) {
                res.status(200).send(users[i])
            }
        }
    }
const newUser = (req, res) => {
        const newUser = {
            id: users.length + 1,
            first_name: req.body.first_name || "",
            last_name: req.body.last_name || "",
            email: req.body.email || "",
            hobbies: req.body.hobbies || [],
            laptop: req.body.laptop || []
        }
    
        users.push(newUser)
    
        res.status(200).send(users)
    }
const getKyle = (req, res) =>{
        const {id} = req.params
    
        for(let i = 0; i < users.length; i++){
            if(users[i].id === +id){
                users[i].first_name = "Kyle"
            }
        }
    
        res.status(200).send(users)
    }
const getDelete =(req, res) => {
        const {id} = req.params
        users = users.filter((user) => {
            if(user.id !== +id) return user
        })
        res.status(200).send(users)
    }

  module.exports= {
    getUsers,
    getUserByQuery,
    getU,
    newUser,
    getKyle,
    getDelete
  }