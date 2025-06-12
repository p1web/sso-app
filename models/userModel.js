// models/userModel.js
const db = require("../config/db");
// const { encrypt, decrypt } = require("../utils/encrypt");
// const crypto = require("crypto");    // if encryption or decryption required

async function findUserByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
}

async function createUser(email, name) {
  // const encryptedName = crypto.createHash("sha256").update(name).digest("hex"); // here encryption/decryption not required
  // const { data: encryptedName, iv } = encrypt(name);
  const [result] = await db.query(
    "INSERT INTO users (email, name) VALUES (?, ?)",
    [email, name]
  );

  return { id: result.insertId, email, name };
}

async function findUserById(id) {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
}

module.exports = {
  findUserByEmail,
  createUser,
  findUserById,
};
