// const { pool } = require('../config/database');

let array = [{ id: 1, name: "sajjad" },
{ id: 2, name: "nazari"}]

// Get all items
function getArray(req, res) {
    res.json(array);
}

// Get item by ID
function getArrayByID(req, res) {
    const item = array.find(c => c.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
}

// Create new item
function postArray(req, res) {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).json({ error: 'Name must be at least 3 characters' });
    }

    const item = {
        id: array.length + 1,
        name: req.body.name,
        description: req.body.description || ''
    };

    array.push(item);
    res.status(201).json(item);
}

// Update item
function putArray(req, res) {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).json({ error: 'Name must be at least 3 characters' });
    }

    const item = array.find(c => c.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    item.name = req.body.name;
    item.description = req.body.description || '';

    res.json(item);
}

// Delete item
function deleteArray(req, res) {
    const item = array.find(c => c.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    const index = array.indexOf(item);
    array.splice(index, 1);

    res.json({ message: 'Item deleted successfully' });
}

module.exports = {
    getArray,
    getArrayByID,
    postArray,
    putArray,
    deleteArray
};
