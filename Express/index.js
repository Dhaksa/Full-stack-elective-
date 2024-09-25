const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/submit", (req, res) => {
  const { name, email, mark1, mark2, mark3, mark4, mark5 } = req.body;
  
  // Convert marks to integers
  const marks = [parseInt(mark1), parseInt(mark2), parseInt(mark3), parseInt(mark4), parseInt(mark5)];
  
  // Calculate total and average
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;

  res.redirect(`/result?name=${name}&email=${email}&total=${total}&average=${average}`);
});

app.get("/result", (req, res) => {
  const { name, email, total, average } = req.query;
  res.send(`
        <h1>Form Submitted Successfully!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average Marks:</strong> ${average}</p>
        <a href="/">Go Back to Form</a>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
