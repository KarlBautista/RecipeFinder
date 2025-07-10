const express = require("express");
const {Client} = require("pg");
const cors = require("cors");
const app = express();
app.use(express.json());

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "1234",
    database: "Recipe_Finder"

});
client.connect();

//backend to frontend connection    
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});


app.listen(5000, () => {
    console.log("running from port 5000")
})


app.get('/api/users', async (req, res) => {
    try{
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Database query failed" });
    }
}) 

app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to register user" });
  }
});

app.post("/api/login", async (req, res) => {
    const { name, password } = req.body;
    try{
        const result = await client.query("SELECT * FROM users WHERE name=$1 and password=$2", 
            [name, password]
        )
        
        if(result.rows.length === 0){
            return res.status(401).json({ error: "Invalid name or password" });
        }
        res.status(200).json({ message:"login successful", user: result.rows[0] })
    } 
    catch(err){
        console.error(err)
        res.status(500).json({ error: "Failed to login "});
    }
});