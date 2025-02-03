const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance,
  // getFinanceReport,
  getFinanceSummary,
  filterFinance,
  getCategoryStats,
  getMonthlyStats,
  getFinanceReportByPeriod,
} = require("../controllers/financeController");

router.get("/", protect, getFinances);
router.post("/", protect, createFinance);
router.put("/:id", protect, updateFinance);
router.delete("/:id", protect, deleteFinance);
router.get("/summary", protect, getFinanceSummary);
// router.get("/report", protect, getFinanceReport);
router.get("/filter", protect, filterFinance);
router.get("/category-stats", protect, getCategoryStats);
router.get("/monthly-stats", protect, getMonthlyStats);
router.get("/report", protect, getFinanceReportByPeriod);

module.exports = router;
