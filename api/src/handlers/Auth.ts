import { GET,GETBYID,POSTACCOUNT,CONFIRMACCOUNT,PUT,PATCH,DELETE } from "./auth.functions"

export class AuthHandler {
  static GET = GET
  static GETBYID = GETBYID
  static POSTACCOUNT = POSTACCOUNT
  static CONFIRMACCOUNT = CONFIRMACCOUNT
  static PATCH = PATCH
  static DELETE = DELETE
}