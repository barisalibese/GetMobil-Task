'use server'
import BaseApiService from '/app/apiService/BaseApiService'
import {redirect} from 'next/navigation'
import {cookies} from "next/headers";
export async function loginAction(data) {
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/login',data)
    console.log(response)
    if (response?.code===200){
        cookies().set('User',response.data['Bearer Token']);
        return redirect('/')
    }
    return redirect('/giris')
}
export async function signUpAction(data) {
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/register',data)
    console.log(response.data)
    if (response?.code===200){
        return redirect('/giris')
    }
    return redirect('/giris',response.message)
}