'use server'
import BaseApiService from '/app/apiService/BaseApiService'
import {redirect} from 'next/navigation'
import {cookies} from "next/headers";
export async function loginAction(data) {
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/admin/login',data)
    console.log(response.data)
    if (response?.code===200){
        cookies().set('Admin',response.data['Bearer Token']);
        return redirect('/admin')
    }
    return redirect('/admin/login')
}