// import express from 'express'
const express = require('express')

const router = express.Router();

const Company = require('../../modules/Company')

// @route    GET api/company
// @deesc    get all Company about company 
// @access   Public
router.get('/', async (req, res) => {
    try {
        const data = await Company.find({})

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