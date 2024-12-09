import { createUser } from "./contollers/createUser";
import express, {Application} from "express";
import { deleteAllUsers } from "./DAL/userCalls";
const dotenv = require("dotenv");
dotenv.config();
deleteAllUsers()
const app:Application = express();
app.use(express.json());

// Middleware to parse URL-encoded data (from forms, etc.)
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use(express.json());

app.get('/', (req:any, res:any) => {
  res.send('Hello, World!');
});

app.post('/user/create',createUser);
app.use("/",(req,res)=>{
  res.json({
    "error":"404 route not setup"
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
