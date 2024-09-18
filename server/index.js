import express from "express";
import cors from "cors";
import mysql from 'mysql';

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dashboard',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get("/adposts", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: "Error" });
    }
    return res.json(data);
  });
});

app.listen(8082, () => {
  console.log("Server is running on port 8082"); 
});
