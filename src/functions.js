const myFunctions = {
    regex:"",
    msg:"",
     voidValidation(data){
       if (data.trim()===""){
        this.msg="Não pode ser vazio!";
        return false;
       }
       else{
        this.msg="";
        return true;
       }
    },
    nameValidation(data){
      this.regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
      this.msg = "O nome deve conter apenas letras";
      return this.regex.test(data);
    },
    emailValidation(){

    },
    numberValidation(){

    },
    spaceValidation(){

    }

}

export default myFunctions;