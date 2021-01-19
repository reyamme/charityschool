const express = require('express')
const router = express.Router()
const SignUpTemplateCopy = require("../models/SignupModels")

router.post('/signup', (request, response) => {
    const signedUpUser = new SignUpTemplateCopy({
        FullName: request.body.FullName,

        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        letter: request.body.letter
    })
    console.log("check it here", request.body.FullName)
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })

        .catch(error => {
            response.json(error)

        })

})

module.exports = router