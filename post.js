const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000; // Define the port

app.use(express.json()); // Middleware to parse JSON body

app.post("/api/employee", (req, res) => {
    fs.readFile("user.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading user data.");
        }

        let employees = [];
        if (data) {
            employees = JSON.parse(data);
        }

        const newEmployee = req.body;

        let newId = 1;
        if (employees.length > 0) {
            newId = employees[employees.length - 1].id + 1;
        }

        newEmployee.id = newId;

        employees.push(newEmployee);

        fs.writeFile("user.json", JSON.stringify(employees, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving employee data.");
            }
            res.status(201).json(newEmployee);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
