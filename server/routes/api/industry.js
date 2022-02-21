// import express from 'express'
const express = require('express')
const router = express.Router();

const Industry = require('../../modules/Industry')

// @route    GET api/industry
// @deesc    get all data about industry 
// @access   Public
router.get('/', async (req, res) => {
    try {
        const data = await Industry.find({})
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