const express = require("express");

let array = [{ id: 1, name: "mostafa" },
{ id: 2, name: "nazari"}]

function getArray(req, res) {
    res.send(array);
}
function find() {
    return array.find(c => c.id === Number(req.params.id));
}
function getArrayByID (req, res) {
    const item = find();
    if (!item)
        return res.status(404).send("not found");
    
    res.send(item);
}
function postArray(req, res){
    if (!req.body.name || req.body.name.length < 3){
        res.status(404).send("wrong name");
        return;
    }
    const item = {
        id: array.length + 1,
        name: req.body.name
    }
    array.push(item);
    res.send(array);
}
function putArray(req, res){
    const item = find();
    if (!item) {
        return res.status(404).send("item not found");
    }
    if (!req.body.name || req.body.name.length < 3){
        return res.status(400).send("wrong name");
    }
    item.name = req.body.name;
    res.send(item);
}

function deleteArray (req , res){
    const item = array.find(c=>c.id === Number(req.params.id));
    if (!item)
        return res.status(404).send("not found");
    const index = array.indexOf(item);
    array.splice(index , 1);
    res.send(item);
}

module.exports = {
    getArray ,
    getArrayByID ,
    postArray ,
    putArray ,
    deleteArray
}
