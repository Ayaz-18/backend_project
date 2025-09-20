class Apierror extends Error {
  constructor(message="somthing went wrong", statusCode,statusCode,erros=[],stack="") {
    super(message);
    this.statusCode = statusCode;
    this.erros = erros;
    this.meassage = message;
    this.succes=false;
    this.errors=this.errors
    if(stack){
        this.stack=stack;

    }else{
        Error.captureStackTrace(this,this.constructor)
    }
  }
}
export {Apierror}