import express from 'express'
const configViewEngine = (app)=>{
    app.use(express.static("./assets/img"));
    app.set("view engine", 'ejs');
    app.set("views","src/views");
}

module.exports = configViewEngine;