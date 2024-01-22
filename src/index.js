const express  = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

//Set the port
app.set("port", process.env.PORT || 3000);

//Initialize the server
app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`)
});
