const passRouter = require('express').Router()

const passCheck = process.env.PASS

passRouter.post('/:pass', (req, res) => {
    const pass = req.params.pass
    console.log(pass, passCheck, pass === passCheck)
    pass === passCheck
        ? res.status(200).json({ accept: 1 })
        : res.status(200).json({ accept: 0 })
})

module.exports = passRouter
