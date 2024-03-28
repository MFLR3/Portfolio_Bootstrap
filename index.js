import express from "express";

// Set up Express Server and port number.
const app = express();
const port = 3000;

// Link to public directory, including images and styles
app.use(express.static("public"));

// Render home directory with index.ejs file
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Render home directory with index.ejs file
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
