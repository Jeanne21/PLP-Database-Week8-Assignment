const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO students (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM students");
  res.json(rows);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM students WHERE id = ?", [
    req.params.id
  ]);
  res.json(rows[0]);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  await db.query(
    "UPDATE students SET name = ?, email = ? WHERE id = ?",
    [name, email, req.params.id]
  );
  res.json({ message: "Student updated" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM students WHERE id = ?", [req.params.id]);
  res.json({ message: "Student deleted" });
});

module.exports = router;
