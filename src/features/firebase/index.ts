import { app } from "./config";
import { getDatabase } from "firebase/database";

export const database = getDatabase(app);

export default app;
