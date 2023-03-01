import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Users");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Users WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Users WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, surname, age, email, img } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Users (name, surname, age, email, img) VALUES (?, ?, ?, ?, ?)",
      [name, surname, age, email, img]
    );
    res.status(201).json({ id: rows.insertId, name, surname, age, email, img });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, age, email, img } = req.body;

    const [result] = await pool.query(
      "UPDATE Users SET name = IFNULL(?, name), surname = IFNULL(?, surname), age = IFNULL(?, age), email = IFNULL(?, email), img = IFNULL(?, img) WHERE id = ?",
      [name, surname, age, email, img, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Users not found" });

    const [rows] = await pool.query("SELECT * FROM Users WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
