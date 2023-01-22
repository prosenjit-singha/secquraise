import { app } from "./config";
import { getDatabase } from "firebase/database";

export const db = getDatabase(app);

export default app;
