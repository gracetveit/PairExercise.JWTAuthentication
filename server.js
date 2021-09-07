const { syncAndSeed } = require("./db");
const app = require("./app");
require("dotenv").config();

const init = async () => {
  await syncAndSeed();
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
};

init();
