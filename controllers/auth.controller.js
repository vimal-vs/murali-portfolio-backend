const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = 'your_secret_key';

const register = async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        res.status(403).json({ message: "fields missing" });
        return;
    }
    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            res.status(201).json({ message: "user already exists" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(403).json({ message: "email or password is missing" });
        return;
    }
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user.id }, SECRET_KEY);
        res.status(200).json({ email: user.email, name: user.name, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    register,
    login,
};