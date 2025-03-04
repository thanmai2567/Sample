const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000; // Server port

app.use(express.json()); // Middleware to parse JSON body

const DATA_FILE = "user.json"; // File to store employee data

// Helper function to read JSON file
const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    } catch (err) {
        return []; // Return empty array if file does not exist or has issues
    }
};

// Helper function to write JSON file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// 1️ **GET - Retrieve all employees**
app.get("/api/employees", (req, res) => {
    const employees = readData();
    res.json(employees);
});

// 2 **GET - Retrieve a specific employee by ID**
app.get("/api/employee/:id", (req, res) => {
    const employees = readData();
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
});

// 3️ **POST - Add a new employee**
app.post("/api/employee", (req, res) => {
    const employees = readData();
    const newEmployee = req.body;

    // Assign a new unique ID
    let newId;
if (employees.length > 0) {
    let lastEmployee = employees[employees.length - 1]; // Get the last employee
    newId = lastEmployee.id + 1; // Increment the ID
} else {
    newId = 1; // If no employees exist, start with ID 1
}

    newEmployee.id = newId;

    employees.push(newEmployee);
    writeData(employees);

    res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
});

// 4️ **PUT - Update an employee**
app.put("/api/employee/:id", (req, res) => {
    const employees = readData();
    const employeeId = parseInt(req.params.id);
    const updatedData = req.body;

    let employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    if (employeeIndex === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }

    for (let key in updatedData) {
        employees[employeeIndex][key] = updatedData[key];
    }
    
    writeData(employees);

    res.json({ message: "Employee updated successfully", employee: employees[employeeIndex] });
});

// 5️ **DELETE - Remove an employee**
app.delete("/api/employee/:id", (req, res) => {
    let employees = readData();
    const employeeId = parseInt(req.params.id);

    let employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    if (employeeIndex === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employees.splice(employeeIndex, 1);
    writeData(employees);

    res.json({ message: "Employee deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
