const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const models = require('./models');
const routes = require('./routes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// Test route
app.get('/', (req, res) => {
    res.send('👋');
});

// Sync database
models.sequelize.sync().then(() => {
    console.log('Database synced successfully');
}).catch(err => {
    console.error('Database sync failed:', err);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;