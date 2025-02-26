const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/analyze-sentiment', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }

    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', { text });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error connecting to Flask API" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server running on http://127.0.0.1:${PORT}`);
});
