// import express from 'express'
const express = require('express')
const router = express.Router();

const RevRange = require('../../modules/RevRange')


// @route    GET api/rev-range
// @deesc    get all data about rav-range 
// @access   Public
router.get('/', async (req, res) => {
    try {
        const data = await RevRange.find({})

        if (!data)
            return res.status(400).json({ msg: 'No data found' })
        res.json(data)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})


// export default router
module.exports = router