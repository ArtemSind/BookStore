import {ICredentials} from "../interfaces/credentials";

export class CredentialsDto implements ICredentials {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }


  email: string;
  password: string;
}
