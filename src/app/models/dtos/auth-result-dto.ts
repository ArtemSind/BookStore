import {IAuthResult} from "../interfaces/auth-result";

export class AuthResultDto implements IAuthResult {
  access_token: string;
  id: any;
}
