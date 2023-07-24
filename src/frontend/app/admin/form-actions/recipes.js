'use server'
import BaseApiService from '/app/apiService/BaseApiService'
import {redirect} from 'next/navigation'
export async function addIngredient(data) {
    console.log(data)
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/admin/recipes',data)
    if (response?.code===200){
        return redirect('/admin/tarifler')
    }
    return redirect('/admin/tarifler/ekle')
}
export async function updateIngredient(data) {
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/admin/ingredients/'+data.get('id'),data)
    if (response?.code===200){
        return redirect('/admin/malzemeler')
    }
    return redirect('/admin/malzemeler/'+data.get('id'))
}
export async function deleteIngredient($id) {
    const apiService=new BaseApiService();
    const response = await apiService.postJSON('/admin/ingredients')
    console.log(response)
    if (response?.code===200){
        return redirect('/admin/malzemeler')
    }
    return redirect('/admin/malzemeler/ekle')
}