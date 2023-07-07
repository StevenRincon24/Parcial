const express = require("express");
const path = require("path");
const data = require("../marvel.json");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("PORT", process.env.PORT || 4000);
app.listen(app.get("PORT"), () => {
  console.log(`Server deployed on port ${app.get("PORT")}`);
});

console.log("eooo" + path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { data: data["Marvel Cinematic Universe"] });
});

app.get("/eliminar/:id", (req, res) => {
  const id = req.params.id;
  delete data["Marvel Cinematic Universe"][id];

  // Envía una respuesta indicando que el registro se eliminó correctamente
  res.send("Registro eliminado exitosamente");
});
