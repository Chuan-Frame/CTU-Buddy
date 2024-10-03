const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// Function to add a discussion
function addDiscussion(discussionText) {
    const sql = 'INSERT INTO Discussions (discussion_text) VALUES (?)';
    connection.query(sql, [discussionText], (err, result) => {
        if (err) throw err;
        console.log('Discussion added:', result.insertId);
    });
}

// Function to add a comment
function addComment(discussionId, commentText) {
    const sql = 'INSERT INTO Comments (discussion_id, comment_text) VALUES (?, ?)';
    connection.query(sql, [discussionId, commentText], (err, result) => {
        if (err) throw err;
        console.log('Comment added:', result.insertId);
    });
}
