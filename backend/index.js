
import express from 'express';
import Agent from './agent.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to allow requests from your frontend URL
const corsOptions = {
    origin: ['https://spiritual-master-bot.onrender.com', 'https://spiritual-master-bot-1.onrender.com'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/hare', async (req, res) => {
    const { question, history } = req.body;
    const response = await Agent(question, history);
    res.send(response);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});