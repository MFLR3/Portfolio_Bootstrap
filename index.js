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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
