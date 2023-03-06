const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Connection = require("./config/db");
var cors = require("cors");
const userrouter = require("./router/user");
const productrouter = require("./router/product");
const videorouter = require("./router/video");
const path = require("path");

require("dotenv").config();

Connection();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/v1/users", userrouter);
app.use("/api/v1/product", productrouter);
app.use("/api/v1/video", videorouter);

app.use("/api/v1/public", express.static(path.join(__dirname, "public")));

//bodyetic
const adminBuild = "../build-admin";
const frontendBuild = "../build";

app.use(express.static(path.join(__dirname, frontendBuild)));
app.use("/login", express.static(path.join(__dirname, frontendBuild)));
app.use("/market/clothes", express.static(path.join(__dirname, frontendBuild)));
app.use("/market/gainers", express.static(path.join(__dirname, frontendBuild)));
app.use("/product/:id", express.static(path.join(__dirname, frontendBuild)));
app.use("/contact", express.static(path.join(__dirname, frontendBuild)));
app.use("/thanks", express.static(path.join(__dirname, frontendBuild)));
app.use("/shopping_bag", express.static(path.join(__dirname, frontendBuild)));
app.use("/payment_bag", express.static(path.join(__dirname, frontendBuild)));
app.use("/coach/tayeb", express.static(path.join(__dirname, frontendBuild)));
app.use("/coach/lyna", express.static(path.join(__dirname, frontendBuild)));
app.use("/personal", express.static(path.join(__dirname, frontendBuild)));
app.use(
  "/payment_program/:title/:subtitle/:price/",
  express.static(path.join(__dirname, frontendBuild))
);
app.use(
  "/payment_advanced_program/:title/:subtitle/:price/",
  express.static(path.join(__dirname, frontendBuild))
);
app.use("/video", express.static(path.join(__dirname, frontendBuild)));

//bodyetic

//admin bodyetic

app.use(express.static(path.join(__dirname, adminBuild)));
app.use("/admin", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/login", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/user", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/command", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/user/create", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/product/create", express.static(path.join(__dirname, adminBuild)));

app.use(
  "/product/create",
  express.static(path.join(__dirname, adminBuild))
);
app.use(
  "/admin/video/create",
  express.static(path.join(__dirname, adminBuild))
);
app.use(
  "/admin/user/update/:id",
  express.static(path.join(__dirname, adminBuild))
);
app.use(
  "/admin/video/update/:id",
  express.static(path.join(__dirname, adminBuild))
);
app.use(
  "/admin/product/update/:id",
  express.static(path.join(__dirname, adminBuild))
);
app.use("/admin/product", express.static(path.join(__dirname, adminBuild)));
app.use("/admin/video", express.static(path.join(__dirname, adminBuild)));

//admin bodyetic

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, frontendBuild, "index.html"));
// });

app.listen(process.env.PORT || 3001, () => {
  console.log(`the server listening on port ${process.env.PORT}...`);
});
