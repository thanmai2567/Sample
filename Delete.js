const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000; // Define the port

app.use(express.json()); // Middleware to parse JSON body

// DELETE request to remove an employee by ID
app.delete("/api/employee/:id", (req, res) => {
    fs.readFile("user.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading user data.");
        }

        let employees = JSON.parse(data);
        const employeeId = parseInt(req.params.id);

        // Find the employee index
        let employeeIndex = employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) {
            return res.status(404).send("Employee not found.");
        }

        // Remove the employee from the array
        employees.splice(employeeIndex, 1);

        fs.writeFile("user.json", JSON.stringify(employees, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving updated employee data.");
            }
            res.json({ message: "Employee deleted successfully" });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
