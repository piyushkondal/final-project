import { Outlet, useNavigate } from "react-router-dom"
import TeacherHeader from "./TeacherHeader"
import TeacherFooter from "./TeacherFooter"
import AuthService from "../../../services/AuthService"
import { toast } from "react-toastify"
import { useEffect } from "react"

export default function TeacherLayout(){
    const nav=useNavigate
    let userType=AuthService.getUserType()

    useEffect(()=>{
        if(userType != 1){
            toast.warning("you are not allowed")
            nav("/login")
        }
    })
    return (
        <>
        <TeacherHeader/>
        <Outlet/>
        <TeacherFooter/>
        </>
    )
}