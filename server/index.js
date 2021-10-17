import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

//Routes

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/posts', postRoutes);
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listienning on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
