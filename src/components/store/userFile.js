
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
      user:[{name:"Guest"}],
      isLogin:false
   }
}

static usersStore(){
   
   const userDB=[
      {
         "id": "jatin@gmail.com",
         "name": "jatin seth",
         "pwd": "1111"
      },
      {
         "id": "guest@gmail.com",
         "name": "user",
         "pwd": "0000"
      }
   ]
 return userDB;
}

}

export default DataBase;









