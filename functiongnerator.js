const TASK_STATE = Symbol("state");

function* taskTracker() {
  const tasks = [
    { name: "task1", description: "completed javascript" },
    { name: "task2", description: "completed python" }
  ];

  for (let task of tasks) {
    task[TASK_STATE] = "pending"; // Assign state to 'pending'
    yield task;
    task[TASK_STATE] = "completed"; // Assign state to 'completed' after yielding
  }
}

const taskManager = { tasks: [] };

// Add tasks from the generator to task manager
for (let task of taskTracker()) {
  taskManager.tasks.push(task);
}

// Log the tasks and their states
taskManager.tasks.forEach((task) => {
  console.log(`${task.name} - ${task.description} - ${task[TASK_STATE]}`);
});
