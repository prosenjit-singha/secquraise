import { app } from "./config";
import { getStorage } from "firebase/storage";

export const firebaseStorage = getStorage(app);

export default app;
