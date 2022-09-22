import express from "express";
import  tasksRouter  from "./router/index.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 9000;
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/", tasksRouter);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
export default app;