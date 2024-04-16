import { GET,GETBYID,POSTREGISTER,GETCONFIRMACCOUNT,PUT,PATCH,DELETE,POSTLOGIN,REQUESTCODE,FORGETPASSWORD,VALIDATETOKEN, UPDATEPASSWORD } from "./auth.functions"

export class AuthHandler {
  static GET = GET
  static GETBYID = GETBYID
  static POSTREGISTER = POSTREGISTER
  static GETCONFIRMACCOUNT = GETCONFIRMACCOUNT
  static POSTLOGIN = POSTLOGIN
  static PUT = PUT
  static PATCH = PATCH
  static DELETE = DELETE
  static REQUESTCODE = REQUESTCODE
  static FORGETPASSWORD = FORGETPASSWORD
  static VALIDATETOKEN = VALIDATETOKEN
  static UPDATEPASSWORD = UPDATEPASSWORD
}