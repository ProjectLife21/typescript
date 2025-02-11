enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((val) => {
  if (typeof val === "number") {
    console.log(val);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["item1", "item2"],
  };
}

enum UserRole {
  ADMIN = "Admin",
  MANAGER = "Manager",
  EMPLOYEE = "Employee",
}

type User = {
  readonly id: number;
  name: string;
  role: UserRole;
  contact: [email: string, phone: string];
};

const john: User = {
  id: 1,
  name: "John",
  role: UserRole.ADMIN,
  contact: ["john@gmail.com", "123-456-789"],
};

function createUser(user: User): User {
  return user;
}

const user1 = createUser(john);
console.log(user1.id);
console.log(user1.name);
console.log(user1.role);
console.log(user1.contact[0]);
console.log(user1.contact[1]);
