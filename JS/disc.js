document.getElementById('disc_post').addEventListener('click', function() {
    const discussionText = document.getElementById('disc_input').value;
    if (discussionText.trim() !== '') {
        const discussionContainer = document.createElement('div');
        discussionContainer.className = 'discussion';

        const discussionContent = document.createElement('p');
        discussionContent.textContent = discussionText;

        const commentInput = document.createElement('textarea');
        commentInput.placeholder = 'Add a comment';

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Post Comment';

        const commentsContainer = document.createElement('div');
        commentsContainer.className = 'comments';

        commentButton.addEventListener('click', function() {
            const commentText = commentInput.value;
            if (commentText.trim() !== '') {
                const comment = document.createElement('p');
                comment.textContent = commentText;
                commentsContainer.appendChild(comment);
                commentInput.value = '';
            }
        });

        discussionContainer.appendChild(discussionContent);
        discussionContainer.appendChild(commentInput);
        discussionContainer.appendChild(commentButton);
        discussionContainer.appendChild(commentsContainer);

        document.getElementById('discussionsContainer').appendChild(discussionContainer);
        document.getElementById('disc_input').value = '';
    }
});
