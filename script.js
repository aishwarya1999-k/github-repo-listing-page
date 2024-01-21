const defaultUsername = 'adam';

// Function to get repositories
async function getRepositories(username) {
    const perPage = document.getElementById('perPage').value;
    const repositoriesContainer = document.getElementById('repositories');
    const loader = document.getElementById('loader');

    try {
        // Simulate an API call delay (remove this line in your actual code)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Clear existing repositories
        repositoriesContainer.innerHTML = '';

        if (username.toLowerCase() === defaultUsername.toLowerCase()) {
            const dummyProjects = [
                { name: 'Portfolio Website', description: 'My personal portfolio website', topics: ['web', 'portfolio'] },
                { name: 'Task Management App', description: 'A simple task management application', topics: ['javascript', 'tasks'] },
            ];

            dummyProjects.forEach(project => {
                const projectContainer = document.createElement('div');
                projectContainer.classList.add('repo-container');

                const projectName = document.createElement('h3');
                projectName.textContent = project.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;

                const topics = project.topics.map(topic => `<span class="topic">${topic}</span>`).join(' ');
                const topicsContainer = document.createElement('div');
                topicsContainer.innerHTML = `<strong>Topics:</strong> ${topics}`;

                projectContainer.appendChild(projectName);
                projectContainer.appendChild(projectDescription);
                projectContainer.appendChild(topicsContainer);

                repositoriesContainer.appendChild(projectContainer);
            });

            // Show repositories container and hide loader
            repositoriesContainer.style.display = 'block';
            loader.style.display = 'none';
        } else {
            // Display error message for repositories not found
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Repositories not found for this user.';
            repositoriesContainer.appendChild(errorMessage);

            // Show repositories container with error message and hide loader
            repositoriesContainer.style.display = 'block';
            loader.style.display = 'none';
        }
    } catch (error) {
        // Show error message and hide repositories container and loader
        repositoriesContainer.style.display = 'none';
        repositoriesContainer.innerHTML = 'Error fetching data.';
        loader.style.display = 'none';
    }
}

// Function to set default user (Adam) information and fetch repositories
function setDefaultUserAndFetchRepositories() {
    const defaultUsernameInput = document.getElementById('username');

    // Set default user information
    defaultUsernameInput.value = defaultUsername.toLowerCase();
}

// Automatically set default user information and fetch showcase projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setDefaultUserAndFetchRepositories();

    // Add an event listener to the "Get Repositories" button
    document.getElementById('getRepositoriesBtn').addEventListener('click', function () {
        const inputUsername = document.getElementById('username').value.toLowerCase();
        
        // Show loader while fetching repositories
        document.getElementById('loader').style.display = 'block';

        // Fetch repositories for the entered username
        getRepositories(inputUsername);
    });
});
