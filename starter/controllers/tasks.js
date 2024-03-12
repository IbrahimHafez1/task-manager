const Task = require('../models/task.js')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        return res.status(201).json({ tasks })
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        return res.status(201).json({ task })
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })
        if (!task) {
            return res.status(404).json({ message: "task not found" })
        }
        return res.status(200).json({ task })

    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })

        if (!task) {
            return res.status(404).json({ message: "task not found" })
        }

        res.status(200).json({ task })
    } catch (error) {
        return res.status(400).json({ msg: error })

    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id })
        if (!task) {
            return res.status(404).json({ message: "task not found" })
        }
        return res.status(200).json({ task })
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }