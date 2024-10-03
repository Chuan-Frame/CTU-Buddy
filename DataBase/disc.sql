CREATE TABLE IF NOT EXISTS Discussions (
    discussion_id INT AUTO_INCREMENT PRIMARY KEY,
    discussion_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
