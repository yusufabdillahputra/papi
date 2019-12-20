const Router = require('express').Router()
const {
  signIn,
  signUp,
  signOut
} = require(`../controllers/auth`)

Router
  .post(`/login`, signIn)
  .post(`/register`, signUp)
  .post(`/logout`, signOut)

module.exports = Router
