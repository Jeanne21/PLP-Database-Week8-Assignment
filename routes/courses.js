const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO courses (title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({ id: result.insertId, title, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM courses");
  res.json(rows);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM courses WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  await db.query("UPDATE courses SET title = ?, description = ? WHERE id = ?", [
    title,
    description,
    req.params.id,
  ]);
  res.json({ message: "Course updated" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM courses WHERE id = ?", [req.params.id]);
  res.json({ message: "Course deleted" });
});

module.exports = router;
