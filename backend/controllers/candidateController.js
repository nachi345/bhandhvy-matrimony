import Candidate from "../models/Candidate.js";

// Add candidate
export const addCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.create(req.body);
    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all candidates (with sorting)
export const getCandidates = async (req, res) => {
  try {
    const { sortBy, order = "asc" } = req.query;
    const sortOptions = {};
    if (sortBy) sortOptions[sortBy] = order === "desc" ? -1 : 1;

    const candidates = await Candidate.find().sort(sortOptions);
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update candidate
export const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated document
      runValidators: true, // validate before updating
    });

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({
      message: "Candidate updated successfully",
      updatedCandidate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating candidate", error: error.message });
  }
};

// Delete candidate
export const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findByIdAndDelete(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting candidate", error: error.message });
  }
};
