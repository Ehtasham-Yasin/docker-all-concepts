const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});