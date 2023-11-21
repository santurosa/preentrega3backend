import dotenv from "dotenv";
import { Command } from "commander";

const program = new Command();
program.option('-p <persistence>', 'Persistencia a utilizar', 'mongo');
program.parse();
const enviroment = program.opts().p

dotenv.config({
    path: enviroment.toUpperCase() === "FILE" ? "./.env.file" : "./.env.mongo"
});

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD,
    persistence: process.env.PERSISTENCE
}