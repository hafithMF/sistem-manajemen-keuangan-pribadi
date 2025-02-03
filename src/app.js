const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const financeRoutes = require("./routes/financeRoutes");
const userRoutes = require("./routes/userRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

// Load environment variables
dotenv.config();

// Koneksikan ke database sebelum server berjalan
connectDB();

// Inisialisasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Definisi Routes
app.use("/api/reminders", reminderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/finances", financeRoutes);

// Jalankan Server
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
