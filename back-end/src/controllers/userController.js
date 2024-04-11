const User = require('../models/userModel');

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// get user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// create new user
const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ where: { username: req.body.username } });
        const existingEmail = await User.findOne({ where: { email: req.body.email } });
        if (existingEmail) {
            res.status(400).json({ message: 'Email đã tồn tại.' });
        }
        else if (existingUser) {
            res.status(400).json({ message: 'Tên đăng nhập đã tồn tại.' });
        } 
        else {
            const user = await User.create(req.body);
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update user password by id
const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// delete user by id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({message: 'User deleted'});
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};  // Path: nettrom-web/back-end/src/controllers/userController.js
