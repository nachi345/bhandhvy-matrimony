import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  time: String,
  place: String,
  height: String,
  qualification: String,
  rashi: String,
  nakshatra: String,
  job: String,
  siblings: String,
  father: String,
  fatherWorking: String,
  mother: String,
  motherWorking: String,
  contactNo: String,
  address: String,
}, { timestamps: true });

const Candidate = mongoose.model("Candidate", candidateSchema);
export default Candidate;
