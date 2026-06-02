async function loadUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  users.forEach(user => {
    console.log(user.name, user.email, user.phone);
  });

  console.log('Nome do primeiro usuário:', users[0].name);
  console.log('Email do segundo usuário:', users[1].email);
}

loadUsers();
