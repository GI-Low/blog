document.addEventListener('DOMContentLoaded', function() {
    // GitHub API integration for likes and comments
    const repoOwner = 'GI-Low';
    const repoName = 'blog';
    const issueNumber = 1; // Replace with the actual issue number for the blog post

    function fetchCommentsAndReactions() {
        fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues/${issueNumber}/comments`)
            .then(response => response.json())
            .then(comments => {
                const commentsSection = document.getElementById('comments-likes');
                commentsSection.innerHTML = `<h2>Comments (${comments.length})</h2>`;
                comments.forEach(comment => {
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    commentElement.innerHTML = `
                        <p><strong>${comment.user.login}</strong>: ${comment.body}</p>
                    `;
                    commentsSection.appendChild(commentElement);
                });
            });

        fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues/${issueNumber}/reactions`, {
            headers: {
                'Accept': 'application/vnd.github.squirrel-girl-preview+json'
            }
        })
            .then(response => response.json())
            .then(reactions => {
                const likesSection = document.getElementById('comments-likes');
                const likesCount = reactions.filter(reaction => reaction.content === 'heart').length;
                likesSection.innerHTML += `<h2>Likes (${likesCount})</h2>`;
            });
    }

    fetchCommentsAndReactions();

    // Tag-based search
    const tags = ['tag1', 'tag2', 'tag3']; // Replace with actual tags
    const tagSection = document.getElementById('tags');
    tags.forEach(tag => {
        const tagElement = document.createElement('button');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            // Implement tag-based search functionality here
            console.log(`Searching for articles with tag: ${tag}`);
        });
        tagSection.appendChild(tagElement);
    });

    // Social media sharing buttons
    const socialSharingSection = document.getElementById('social-sharing');
    const platforms = ['BlueSky', 'LinkedIn', 'X']; // Add more platforms as needed
    platforms.forEach(platform => {
        const shareButton = document.createElement('button');
        shareButton.classList.add('share-button');
        shareButton.textContent = `Share on ${platform}`;
        shareButton.addEventListener('click', () => {
            // Implement social media sharing functionality here
            console.log(`Sharing on ${platform}`);
        });
        socialSharingSection.appendChild(shareButton);
    });

    // Light mode and dark mode toggle
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load the user's preference for light mode or dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});
