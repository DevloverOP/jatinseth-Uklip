
class DataBase{

getusers(){
  return DataBase.usersStore();
}

storeUser(user){
   const userdata=[];
   localStorage.clear();
   if(localStorage.getItem('loggeduser') === null){
       userdata.push(user[0]);
     localStorage.setItem('loggeduser',JSON.stringify(userdata))
   }    
}

clearStore(){
   localStorage.clear();
}

isAlreadyLoginUser(){
  if(localStorage.getItem('loggeduser') !== null)
   { const user=JSON.parse(localStorage.getItem('loggeduser'))
      return {
         user:user,
         isLogin:true
      }
   }else return {
      user:"Guest",
      isLogin:false
   }
}

static usersStore(){
 return [
      {
         "id": "an@gmail.com",
         "name": "Ankit Rawat",
         "password": "1111"
      },
      {
         "id": "pk@gmail.com",
         "name": "Prakash Singh",
         "password": "1122"
      },
      {
         "id": "ak@gmail.com",
         "name": "Ankush Soni",
         "password": "1105"
      },
      {
         "id": "mn@gmail.com",
         "name": "Mohit",
         "password": "1122"
      },
      {
         "id": "jatin@gmail.com",
         "name": "jatin seth",
         "password": "1111"
      }
   ]
}

}

export default DataBase;









