export interface IUserToken {
  Value: string;
}

export interface IAuthUser {
  Nombres: string;
  Token: IUserToken;
}
