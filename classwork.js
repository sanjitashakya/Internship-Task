document.getElementById("fetchButton").addEventListener('click', fetchUsersFetchApi)

function fetchUsersFetchApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            loading.innerHTML = "Error loading users!";
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; 

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const avatar = document.createElement("div");
        avatar.classList.add("user-avatar");
        avatar.textContent = user.name.charAt(0).toUpperCase();

        const userInfo = document.createElement("div");
        userInfo.innerHTML = `<strong>${user.name}</strong><br><small>${user.email}</small>`;

        userCard.appendChild(avatar);
        userCard.appendChild(userInfo);
        userList.appendChild(userCard);
    });
}
