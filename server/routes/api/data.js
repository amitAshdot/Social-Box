// import express from 'express'
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')

const Data = require('../../modules/Data')


// @route    GET api/data
// @deesc    Get all data route
// @access   Public
router.get('/', async (req, res) => {
    try {
        const data = await Data.find({})

        if (!data)
            return res.status(400).json({ msg: 'No data found' })
        res.json(data)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})



// @route    POST api/data
// @deesc    Post new data
// // @access   Public
// router.post('/', [//----test case, need to change the check function to meet schema
//     check('name', 'Name is required').not().isEmpty(),
//     check('email', 'please include valid email').isEmail(),
//     check('password', 'please use password').isLength({ min: 6 })
// ], (req, res) => {
//     console.log(req.body)
//     const errors = validationResult(req)

//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     res.send('data.route')
// })

// export default router
module.exports = router