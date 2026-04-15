import express from "express";
import cors from "cors";

import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";
import { clerkMiddleware } from "@clerk/express";

const app = express();


app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());


app.use("/employees", employeeRoutes);
app.use("/roles", roleRoutes);
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;