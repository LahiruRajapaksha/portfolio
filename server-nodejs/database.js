import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

export async function getData(id) {
  const [rows] = await pool.execute(`SELECT * FROM notes WHERE id = ?`, [id]);
  return rows;
}

export async function addData(title, content) {
  const [rows] = await pool.execute(
    "INSERT INTO notes (title, contents) VALUES (?, ?)",
    [title, content]
  );
  return getData(rows.insertId);
}
