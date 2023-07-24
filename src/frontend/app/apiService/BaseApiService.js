import {cookies} from "next/headers";

class BaseApiService {
    defaultHeaders = {
        'Cache': 'no-cache',
        "clientID": process.env.ClientID,
        "ClientSecret": process.env.ClientSecret,
        "GrantType": process.env.GrantType
    }

    async postJSON(endPoint, payload=null, headers = null) {
            if (headers) {
                this.defaultHeaders = {...this.defaultHeaders, ...headers};
            }
            if (cookies().get('Admin')?.value!==undefined){
            this.defaultHeaders= {...this.defaultHeaders,...{
                    'Authorization':"Bearer "+cookies().get('Admin').value
                }}
             }
            if (cookies().get('User')?.value!==undefined){
            this.defaultHeaders= {...this.defaultHeaders,...{
                    'Authorization':"Bearer "+cookies().get('User').value
                }}
            }
            return await fetch("http://nginx/api"+endPoint , {
                method: "POST", // or 'PUT'
                headers: this.defaultHeaders,
                body: payload,
                credentials: 'same-origin'
            })
                .then(response => response.json())
                .then(data => {
                    // API yanıtını işleyin
                   return data;
                    // İşleme devam edebilirsiniz...
                })
                .catch(error => {
                    // Hata durumunda hata işleme yapın
                    return error;
                    // Hata durumuna göre işlemler yapabilirsiniz...
                });
    }
    async getJSON(endPoint, payload={}, headers = {}) {
        if (headers) {
            this.defaultHeaders = {...this.defaultHeaders, ...headers};
        }
        if (cookies().get('Admin')?.value!==undefined){
            this.defaultHeaders= {...this.defaultHeaders,...{
                'Authorization':"Bearer "+cookies().get('Admin').value
            }}
        }
        if (cookies().get('User')?.value!==undefined){
            this.defaultHeaders= {...this.defaultHeaders,...{
                    'Authorization':"Bearer "+cookies().get('User').value
                }}
        }
        return await fetch("http://nginx/api"+endPoint , {
            method: "GET", // or 'PUT'
            headers: this.defaultHeaders,
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                // Hata durumunda hata işleme yapın
                return error;
                // Hata durumuna göre işlemler yapabilirsiniz...
            });
    }
}

export default BaseApiService;


