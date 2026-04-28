let tasks = [];
let nextId = 1;

app.post("/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required"});

    }

    const tasks = {
        id: nextId++,
        title,
        completed: false
    };

    tasks.push(task);
    res.status(201).json(task);
});
