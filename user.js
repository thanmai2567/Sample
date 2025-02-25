const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;


app.use(express.json());


app.get("/api/employee/:id", (req, res) => {
    const employeeId = parseInt(req.params.id); 

    
    fs.readFile("user.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading user data.");
        }

        const employees = JSON.parse(data); 
        const employee = employees.find(emp => emp.id === employeeId); 

        if (!employee) {
            return res.status(404).send("Employee not found.");
        }

        res.json(employee);
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
