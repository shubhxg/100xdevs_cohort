const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const filePath = path.join(__dirname, '/minidatabase.json');

app.get('/todos', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post('/todos', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const todosList = JSON.parse(data);
        const randomID = Math.floor(Math.random() * 100000) + 1;
        const newTodo = {
            title: req.body.title,
            id: randomID,
            description: req.body.description,
            isCompleted: req.body.isCompleted || false
        };

        todosList.push(newTodo);
        await fs.writeFile(filePath, JSON.stringify(todosList));
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.get('/todos/:id', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const todosList = JSON.parse(data);
        const targetTodo = findTodoByID(todosList, parseInt(req.params.id));

        if (!targetTodo) {
            res.sendStatus(404);
        } else {
            res.json(targetTodo);
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        let todosList = JSON.parse(data);
        const targetID = parseInt(req.params.id);
        const targetTodoIndex = todosList.findIndex(item => item.id === targetID);

        if (targetTodoIndex === -1) {
            res.status(404).json({ error: 'Todo not found!' });
        } else {
            todosList[targetTodoIndex] = {
                ...todosList[targetTodoIndex],
                title: req.body.title,
                description: req.body.description,
                isCompleted: req.body.isCompleted
            };

            await fs.writeFile(filePath, JSON.stringify(todosList));
            res.json({ msg: 'Todo updated successfully!' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        let todosList = JSON.parse(data);
        const targetID = parseInt(req.params.id);
        const targetTodoIndex = todosList.findIndex(item => item.id === targetID);

        if (targetTodoIndex === -1) {
            res.status(404).json({ error: 'Todo not found!' });
        } else {
            if (todosList.length) {
                todosList.splice(targetTodoIndex, 1);
                await fs.writeFile(filePath, JSON.stringify(todosList));
                res.status(200).json({ msg: 'Deleted the todo!' });
            } else {
                res.status(400).json({ error: 'Todo list is empty!' });
            }
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

function findTodoByID(todosList, targetID) {
    return todosList.find(item => item.id === targetID);
}

app.listen(PORT);
