const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const gadgetRoutes = require('./routes/gadgetRoutes');
const authRoutes = require('./routes/authRoutes');
const supabase = require('./config/database'); // Use Supabase

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/gadgets', gadgetRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Gadget API! 🚀</h1>`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
