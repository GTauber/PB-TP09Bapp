const myFunctions = {
    regex:"",
    auxRegex : /\s/,
    msg:"",

     voidValidation(data){
       if (data.trim()===""){
        this.msg="Campo obrigatório ";
        return false;
       }
       else{
        this.msg="";
        return true;
       }
    },

    letterValidation(data){
      this.regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
      this.msg = "Deve conter apenas letras";
      return this.regex.test(data);
    },
    emailValidation(data){
      this.regex = /@/;
      if(!this.regex.test(data) || this.auxRegex.test(data)){
        this.msg="Deve conter arroba e não ter espaços";
        return false;
      }
      return true;
    },
    numberValidation(data){
      this.regex=/\D/;
      if(!this.regex.test(data)){
        this.msg="Deve conter 11 dígitos (DDD+numero) apenas números e não ter espaços";
        return false;
      }
      return true;
    },
    validPassword(data){
      this.regex=/[a-zA-Z0-9@#$.%*-_+,?]{6,}/;
      if (!this.regex.test(data)){
        this.msg="Deve ter no mínimo 6 dígitos"
        return false;
      }
      return true;
    },

    toNameValidation(data){
      if(!this.voidValidation(data)){
        return false;
      }
      else if (!this.letterValidation(data)){
        return false;
      }
      else{
        return true;
      }
    },
    
    toEmailValidation(data){
      if(!this.voidValidation(data)){
        return false;
      }
      else if (!this.emailValidation(data)){
        return false;
      }
      else{
        return true;
      }
    },

    toTelValidation(data){
      if(!this.voidValidation(data)){
        return false;
      }
      else if (!this.numberValidation(data)){
        return false;
      }
      else{
        return true;
      }
    },
    toPassValidation(data){
      if(!this.voidValidation(data)){
        return false;
      }
      else if (!this.validPassword(data)){
        return false;
      }
      else{
        return true;
      }
    },
    toPassAgainValid(data1,data2){
      if (data1!=data2){
        this.msg="Senhas não são correspondentes";
      }
    }
}

export default myFunctions;