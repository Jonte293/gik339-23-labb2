/* const { response } = require("express"); */

const url = "http://localhost:3000/users";

/* const request = new Request(url); */

/* fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const html = `<p>${user.id}${user.firstName}${user.lastName}
      ${user.username}${user.color}</p>`;
      document.body.insertAdjacentHTML("beforeend", html);
      console.log(html);
    });
    return users;
  }); */

/* const responsePromise = fetch(url);

responsePromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));
const request = new Request(url);
fetch(request)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const html = `<p>
          ID: ${user.id}, Firstname: ${user.firstName}, Lastname: ${user.lastName}, Username: ${user.username}, Color: ${user.color}
        </p>`;
      document.body.insertAdjacentHTML("beforeend", html);
      console.log(html);
    });
  }); */
/* const responsePromise = fetch(url);

responsePromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));
const request = new Request(url);
fetch(request)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const html = `<p>
          ID: ${user.id}Firstname: ${user.firstName}Lastname: ${user.lastName}
          Username: ${user.username} Color: ${user.color}
        </p>`;
      document.body.insertAdjacentHTML("beforeend", html);
      console.log(html);
    });
  });

const ul = document.createElement("ul");
users.forEach((user) => {
  const li = document.createElement("li"); // Create an <li> element
  li.textContent = user; // Set the text of the <li>
  ul.appendChild(li); // Append the <li> to the <ul>
});

// Append the <ul> to the body (or another container)
document.body.appendChild(ul); */

// Fetch data from the URL
fetch(url)
  .then((response) => {
    console.log(response); // Log the raw response
    return response.json(); // Convert the response to JSON
  })
  .then((users) => {
    // Log the users array
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
