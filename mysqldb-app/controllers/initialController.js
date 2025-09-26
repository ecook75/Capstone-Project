"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");

// const storeData = async (table, body, res) => {
    const storeUsers = async () => {
    let response = await axios.get(`http://localhost:3000/users/`);
    try {
        const array = response.data;
        console.log(array)

        for(let i of array) {
        console.log(i.createdAt, i.updatedAt)
//Format this according to your table
        const formatObj ={
            id: "number",
            runnerId: "integer",
            firstName: "name",
            lastName: "surname",
            emailId: "email",
            password: "any"
        };

//change Table to the name of your table
        let [newi, created ] = await Models.User.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }

    //res.send({message:'Data import complete.'})
}
    catch (err) {
       // res.send(err.message)
    }
}


const storeRunningData = async () => {
    let response = await axios.get(`http://localhost:3000/runningMethods/`);
    try {
        const array = response.data;
        console.log(array)
//let inc = 0
        for(let i of array) {
     //   console.log(i.createdAt, i.updatedAt)
     //   inc++
//console.log(parseInt(i.id))
i.id = parseInt(i.id)
console.log(i.id)
//Format this according to your table
        const formatObj ={
            title: i.title,
            description: i.description,
            origin: i.origin,
            fitness_level: i.fitness_level
        };
//change Table to the name of your table
        let [newi, created ] = await Models.RunningMethod.findOrCreate({
            where: {title:i.title},
            defaults: formatObj
        })
    }

    //res.send({message:'Data import complete.'})
}
    catch (err) {
     //   res.send(err.message)
    }
}

module.exports = {
    storeUsers, storeRunningData

}