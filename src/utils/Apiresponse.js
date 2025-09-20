class apiresponse{
    constructor(statusCode,data,message="succes"){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        thiis.succes=statusCode<400;

    }
}
export {apiresponse}