export interface UserDto {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  isadmin: boolean;
  isactive: boolean;
  authdata?: string;
}
