import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed! Please ensure MongoDB is running and MONGODB_URI in Backend/.env is configured correctly.");
    console.error("Error details:", err.message);
  });
