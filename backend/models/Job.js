const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     JobDescription: {
          type: String,
          required: true
     },
     Category: {
          type: String,
     },
     JobType: {
          type: [String]
     },
     EmployementType: {
          type: String
     },
     Country: {
          type: String
     },
     State: {
          type: String
     },
     City: {
          type: String
     },
     Salary: {
          type: [Number]
     },
     lastDateToApply: {
          type: Date
     },
     Email: {
          type: String
     },
     PhoneNo: {
          type: String
     },
     Address: {
          type: String
     }
})

const Jobs = mongoose.model("Jobs", JobSchema);

module.exports = Jobs;