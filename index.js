import express from "express";
// const express = require('express')
const app = express();
const port = 5000;

app.get("/", (req, res)=> {
    console.log("welcome home")
    res.send("Hello Seema")
})

app.listen(port, ()=> console.log(`server run on port ${port}`))
