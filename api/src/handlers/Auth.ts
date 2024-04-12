import { GET,GETBYID,POSTREGISTER,GETCONFIRMACCOUNT,PUT,PATCH,DELETE,POSTLOGIN,REQUESTCODE,FORGETPASSWORD } from "./auth.functions"

export class AuthHandler {
  static GET = GET
  static GETBYID = GETBYID
  static POSTREGISTER = POSTREGISTER
  static GETCONFIRMACCOUNT = GETCONFIRMACCOUNT
  static POSTLOGIN = POSTLOGIN
  static PATCH = PATCH
  static DELETE = DELETE
  static REQUESTCODE = REQUESTCODE
  static FORGETPASSWORD = FORGETPASSWORD
}