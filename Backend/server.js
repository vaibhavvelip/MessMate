  require("dotenv").config();
  const express = require("express");
  const cors = require("cors");
  const authRoutes = require("./routes/authRoutes");
  const dashboardRoutes = require("./routes/dashboardRoutes");
  const expenseRoutes = require("./routes/expenseRoutes");
  const menuRoutes = require("./routes/menuRoutes");
  // const profileRoutes = require("./routes/profileRoutes");
  const feedbackRoutes = require("./routes/feedbackRoutes");
  const adminRoutes = require("./routes/adminRoutes");

  const app = express();
  app.use(express.json());
  app.use(cors());

  // ✅ Health check for Render
  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // ✅ Routes
  app.use("/", authRoutes);
  app.use("/dashboard", dashboardRoutes);
  app.use("/", menuRoutes);
  app.use("/feedback", feedbackRoutes);
  app.use("/",adminRoutes);
  app.use("/expense", expenseRoutes);

  // app.use("/", profileRoutes);
  // ✅ Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
