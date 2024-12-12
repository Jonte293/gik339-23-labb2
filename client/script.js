const url = "http://localhost:3000/users";

/* const request = new Request(url); */

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    const html = `<p>${users[0].firstName}</p>`;
    document.body.insertAdjacentHTML('beforeend', html);

    // returnera inte us users såhär:
    return users;
  }