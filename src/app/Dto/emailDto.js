 class EmailDTO {

     constructor(data) {
         this.ownerRef = data.ownerRef;
         this.from = data.from;
         this.to = data.to;
         this.subject = data.subject;
         this.message = data.message;
     }

     isValid() {
         const errors = []
         if (!isNotEmpty(this.ownerRef)) errors.push('O campo *ownerRef* é obrigatório');

         if (!isNotEmpty(this.from)) errors.push('O campo *from* é obrigatório');

         if (!isNotAEmail(this.from)) errors.push('O campo *from* precisa conter um e-mail válido!')

         if (!isNotEmpty(this.to)) errors.push('O campo *to* é obrigatório');

         if (!isNotAEmail(this.to)) errors.push('O campo *to* precisa conter um e-mail válido!')


         if (!isNotEmpty(this.subject)) errors.push('O campo *subject* é obrigatório');
         if (!isNotEmpty(this.message)) errors.push('O campo *message* é obrigatório');


         return errors.length === 0 ? true : { errors };
     }
 }

 function isNotEmpty(value) {
     return value !== undefined && value !== null && value !== '';
 }

 function isNotAEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email)
 }

 module.exports = EmailDTO;