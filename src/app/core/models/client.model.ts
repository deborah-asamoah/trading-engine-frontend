import Role from './role.enum';

class Client {
  public id: string;
  public name: string;
  public email: string;
  public role: Role;

  constructor(id: string, name: string, email: string, role: Role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

export default Client;
