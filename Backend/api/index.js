import app from "../src/app.js";
import { connectDB } from "../src/db/index.js";
import { config } from "dotenv";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
config();

connectDB().catch(console.dir);

export default app;
