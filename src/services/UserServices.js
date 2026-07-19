import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AuthService from "./AuthService";
import { UserModel } from "../model/UserModel";

const dbPath = "users"




class UserServices{
     async Login(email,password){
        try{
        let userCreed =await signInWithEmailAndPassword(auth, email, password)

        // signInWithEmailAndPassword(auth, email, password)

        const uid=userCreed.user.uid

       let userDocs = await getDoc(doc(db, dbPath, uid))
       const userData = userDocs.data()


       
       AuthService.setData(userData,uid)

            if (userData.userType == 1) {
                return 1
            } else if (userData.userType == 2) {
                return 2
            } else {
                return 0
            }

        // console.log(userCreed.user.uid);
        // getDoc
     }catch(err){
        console.log(err);
     }

    }

    async Register(data){
        try{
            let userCreed= await createUserWithEmailAndPassword(auth,data.email,data.password)
            let uid= userCreed.user.uid

           let obj=new UserModel()
           obj.name=data.name
           obj.email=data.email
           obj.contact=data.contact
           obj.profile=data.profile
           obj.address=data.address

            let data1={ ...obj}
           AuthService.setData(data1,uid)

          await setDoc(doc(db,dbPath,uid),data1)

          return 1


        }catch(err){
            console.log(err)
        }
    }
}
export default new UserServices