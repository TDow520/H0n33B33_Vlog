import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

dotenv.config();

const { Pool } = pg;
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.use(express.json());
app.use(express.static("client"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


