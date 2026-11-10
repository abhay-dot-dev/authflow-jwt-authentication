import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://authflow-jwt-authentication.vercel.app'
    ]
}))
app.use(express.json(), authRoutes);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome" })
});

try {
    await connectDB();
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is up and running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error(error.message);
    process.exit(1);
}