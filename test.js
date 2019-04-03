const { hasAccess, addRole, getRoles, getSingleRole, deleteRole } = require("./app");
const users = [
  {
    email: "admin@example.com",
    role: "admin"
  },
  {
    email: "editor@example.com",
    role: "editor"
  },
  {
    email: "user@example.com",
    role: "user"
  },
  {
    email: "manager@example.com",
    role: "manager"
  }
];
const roles = {
    manager: {
        permissions: [
            { src: "users", action: ["read", "write", "update"] },
            { src: "posts", action: ["read", "write", "update"] }
        ]
    }
};
// users.map(user => console.log(hasAccess(user, "users", "write")));
// addRole(roles)
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));
deleteRole('manager').then(roles => console.log(roles))