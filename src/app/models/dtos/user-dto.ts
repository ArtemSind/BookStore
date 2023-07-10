import {IUser} from "../interfaces/user";

export class UserDto implements IUser {

  constructor(email: string, name: string, password: string, surname: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.surname = surname;
  }

  email: string;
  id: string;
  name: string;
  password: string;
  surname: string;
}
