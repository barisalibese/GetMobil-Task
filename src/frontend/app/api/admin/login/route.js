import { NextResponse } from 'next/server'
import BaseApiService from '/app/apiService/BaseApiService'
import { cookies } from 'next/headers'
export async function POST(request) {
    let formData= await request.formData();
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/admin/login',formData)
    if (response?.code===200){
       cookies().set('Admin',response.data['Bearer Token']);
    }
    return NextResponse.json(response.data)
}