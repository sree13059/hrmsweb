const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  session: String,
  class: String,
  section: String,
  rollno: String,
  group: String,
  photo: String,

  name: String,
  nameBengali: String,
  fatherName: String,
  motherName: String,

  presentAddress: String,
  presentPostOffice: String,
  presentPoliceStation: String,
  presentDistrict: String,
  presentCell: String,

  motherPresentAddress: String,
  motherPostOffice: String,
  motherPoliceStation: String,
  motherDistrict: String,
  motherCell: String,

  admissionDate: Date,
  nationality: String,
  religion: String,

  previousClass: String,
  previousSchool: String,
  previousRollno: String,
  previousGroup: String,

  dob: Date,
  gender: String,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
