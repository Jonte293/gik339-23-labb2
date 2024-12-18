const url = "http://localhost:3000/users";

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    console.log(users);

    const ul = document.createElement("ul");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h3 id="h3id">ID: ${user.id}</h3>
      <p>Firstname: ${user.firstName}</p>
      <p>Lastname: ${user.lastName}</p>
      <p>Username: ${user.username}</p>
      <p>Color: ${user.color}</p>`;
      li.style.backgroundColor = user.color;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  });
