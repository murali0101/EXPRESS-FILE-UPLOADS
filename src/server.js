const app = require("./index");
const connect = require("./configs/db");

app.listen(7000, async () => {
  try {
    await connect();
    console.log("listening port 7000...");
  } catch (error) {
    console.log(error.message);
  }
});
