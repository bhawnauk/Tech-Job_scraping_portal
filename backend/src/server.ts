import "dotenv/config";
import express from "express";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js";


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/jobs", jobRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Tech Job Portal API running 🚀"
  });
});


const PORT = process.env.PORT || 5050;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});