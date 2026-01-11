const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ======================
   MIDDLEWARES
====================== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Static folder for uploads
app.use("/uploads", express.static("uploads"));

/* ======================
   ROUTES
====================== */
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/super-admin", require("./routes/superAdminRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/students", require("./routes/studentRoutes")); // ✅ STUDENT ROUTES ADDED
app.use("/api/employees", require("./routes/employeeRoutes")); // ✅ EMPLOYEE ROUTES ADDED
app.use("/api/admin", require("./routes/subjectRoutes"));
app.use("/api/forms", require("./routes/formRoutes"));
app.use("/api/sections", require("./routes/sectionRoutes"));
app.use("/api/student-groups", require("./routes/studentGroupRoutes"));
app.use("/api/group-subjects", require("./routes/groupSubjectRoutes"));
app.use("/api/designations", require("./routes/designationRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/employee-attendance", require("./routes/employeeAttendanceRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/employeeregister", require("./routes/employeeregister"));
app.use("/api/student-promotion", require("./routes/studentPromotionRoutes"));
app.use("/api/studentlist", require("./routes/studentlistRoutes"));
app.use("/api/employeelist", require("./routes/employeeListRoutes"));
app.use( "/api/studentdetails",require("./routes/studentDetailsReportRoutes"));
app.use("/api/studentlistreport",require("./routes/studentListReportRoutes"));
app.use(
  "/api/employeelistreports",
  require("./routes/employeeListReportRoutes")
);
app.use(
  "/api/employeedetailsreport",
  require("./routes/employeeDetailsReportRoutes")
);
app.use(
  "/api/student-marks-policies",
  require("./routes/studentMarksPolicyRoutes")
);
app.use("/api/subject-wise-marks", require("./routes/subjectWiseMarksRoutes"));
app.use(
  "/api/result-verification",
  require("./routes/resultVerificationRoutes")
);
app.use(
  "/api/employeelistreport",
  require("./routes/employeeListReportRoutes")
);
app.use("/api/routine-slots", require("./routes/routineSlotRoutes"));
app.use("/api/routine-entry", require("./routes/routineEntryRoutes"));
app.use(
  "/api/studentclassroutine",
  require("./routes/studentClassRoutineRoutes")
);
app.use("/api/debit", require("./routes/debitRoutes"));
app.use("/api/credit-heads", require("./routes/creditHeadRoutes"));
app.use("/api/bank-deposits", require("./routes/bankDepositRoutes"));
app.use("/api/bank-withdraws", require("./routes/bankWithdrawRoutes"));
app.use("/api/incomes", require("./routes/incomeRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
/* ======================
   DEFAULT ROUTE
====================== */
app.get("/", (req, res) => {
  res.send("School Management Backend API is running 🚀");
});



/* ======================
   ERROR HANDLING
====================== */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

/* ======================
   DATABASE CONNECTION
====================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });

/* ======================
   SERVER START
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
