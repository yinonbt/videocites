import express from "express";
import router from "../routes/routes";
const app = express();
app.use(express.json());
app.use(router);
app.listen(process.env.PORT || 5000);
export default app;
