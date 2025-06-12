// utils/encrypt.js
const crypto = require("crypto");

const ALGORITHM = "aes-256-cbc";
const KEY = crypto.createHash("sha256").update(String(process.env.ENCRYPT_SECRET)).digest("base64").substr(0, 32);
const IV = crypto.randomBytes(16); // Initialization vector

function encrypt(text) {
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    iv: IV.toString("hex"),
    data: encrypted
  };
}

function decrypt(encryptedText, ivHex) {
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, Buffer.from(ivHex, "hex"));
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = { encrypt, decrypt };
