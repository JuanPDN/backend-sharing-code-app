import dotenv from "dotenv";
import app from "./app";
import { connectToDatabase } from "./db/db";


dotenv.config();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});