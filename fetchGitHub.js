document.getElementById("searchBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = "Please enter a username.";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      profileDiv.innerHTML = "User not found.";
      return;
    }

    const data = await response.json();

    profileDiv.innerHTML = `
      <div class="card">
        <img src="${data.avatar_url}" width="100" height="100" />
        <h2>${data.name ?? data.login}</h2>
        <p>${data.bio ?? "No bio available"}</p>
        <p>Followers: ${data.followers}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      </div>
    `;
  } catch (error) {
    profileDiv.innerHTML = "Something went wrong.";
    console.error(error);
  }
});
