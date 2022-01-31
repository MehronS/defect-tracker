const { Pool } = require("pg");

const credentials = {
  user: "mehron",
  host: "localhost",
  database: "defect-tracker",
  port: 5432,
};

const pool = new Pool(credentials);
async function connectionDemo() {
  const result = await pool.query("SELECT * FROM users ORDER BY name DESC");
  await pool.end();

  return result;
}

(async () => {
  const poolResult = await connectionDemo();
  console.log(poolResult.rows);
})();

// const pool = new Pool(credentials);

// pool.connect();
``;
