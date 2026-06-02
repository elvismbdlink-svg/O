async function loadUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  users.forEach(user => {
    console.log(user.name, user.email, user.phone);

    const lista = document.getElementById('lista');
    lista.innerHTML += `<p>${user.name} - ${user.email} - ${user.phone}</p>`;
  });

  console.log('Nome do primeiro usuário:', users[0].name);
  console.log('Email do segundo usuário:', users[1].email);

  document.getElementById('primeiro-nome').innerHTML = `<p>Nome do primeiro usuário: ${users[0].name}</p>`;
  document.getElementById('segundo-email').innerHTML = `<p>Email do segundo usuário: ${users[1].email}</p>`;
}

loadUsers();