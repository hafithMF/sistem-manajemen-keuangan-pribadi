const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const financeRoutes = require("./routes/financeRoutes");
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const app = express();

dotenv.config();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use("/api/finances", financeRoutes);
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));

connectDB();