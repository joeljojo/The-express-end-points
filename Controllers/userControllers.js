const express = require('express');
const mssql = require('mssql');
const router = express()
const config=require('../Config/db')



// get function

async function getUsers(req,res){
    try{
        let pool=await mssql.connect(config)
        let result= await pool.request().query("Select * from users")
        res.json(result.recordset)

    }
    catch(error){
        console.log(error)
    }

}

// Get specific user
async function getSpecificUsers(req,res){
    try{
        let pool=await mssql.connect(config)
        const id=req.params.id
        let result= await pool.request().query(`Select * from users where id=${id}`)
        res.json(result.recordset)

    }
    catch(error){
        console.log(error)
    }

}

//Post function

async function addUsers(req,res){
    try{
        let pool=await mssql.connect(config)
        const {email,password} = req.body
        
        await pool.request().query(`Insert into users(email,password) values('${email}','${password}')`).recordset
        res.send('User added successfully')

    }
    catch(error){
        console.log(error)
    }

}


// Delete users
async function deleteUsers(req,res){
    try{
        let pool=await mssql.connect(config)
        const id = req.params.id
        await pool.request().query(`Delete from users where id = ${id}`)
        res.send('User Deleted successfully')

    }
    catch(error){
        console.log(error)
    }

}

//Update
// Delete users
async function updateUsers(req,res){
    try{
        let pool=await mssql.connect(config)
        const id=req.params.id
        const {email,password}=req.body
        await pool.request().query(`Update users set email='${email}', password='${password}' where id = ${id}`)
        res.send('User updated successfully')

    }
    catch(error){
        console.log(error)
    }

}


module.exports = {
    getUsers,
    addUsers,
    deleteUsers,
    updateUsers,
    getSpecificUsers
}