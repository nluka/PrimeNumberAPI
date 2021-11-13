import app from "./app";

if (process.env["NODE_ENV"] !== "production") {
  require("dotenv").config();
}

const PORT = process.env["PORT"];

app.listen(PORT, () =>
  console.log(`prime-number-api is listening on port ${PORT}`)
);
