import { Injectable } from '@angular/core'
import { Http, Response,Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Storage } from '@ionic/storage';



@Injectable()
export class UserService{

    private auth: any;
    private parameters;
    constructor(private http: Http,
                private storage: Storage){
                    storage.get('user').then((val) => {
                        this.auth = val.attributes.auth_token;
                        console.log(this.auth);
                    });
                }

    private baseUrl = "https://dispensary.greenstork.com";
    


    login(userObj){
        
        //let userData = JSON.stringify(userObj); 
        let  data= { user: { data: { attributes: userObj } } }
        
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            }); 
            headers.append('Accept', 'application/vnd.greenstork.v1');
        let options = new RequestOptions({ headers: headers 
            }
        ); 

    return this.http.post(`${this.baseUrl}/api/order_management/login`, data, options)
            .map((response: Response) => response.json())
            //.catch(this.handleError);
    }

    getOrder(){ 
        
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            }); 
            headers.append('Accept', 'application/vnd.greenstork.v1');
            headers.append('Authorization', this.auth);
        let options = new RequestOptions({ headers: headers 
            }
        ); 

        return this.http.get(`${this.baseUrl}/api/order_management/retrieve_filter_values`, options)
            .map((response: Response) => response.json())
            //.catch(this.handleError);
    }

    SelectChange(page: string, stores: string, order_date: string ,statuses: string, type: string){

        let params = new URLSearchParams();
            params.set('page',page);
            params.set('stores',stores);
            params.set('order_date',order_date);
            params.set('statuses',statuses);
            params.set('type',type);
        
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            }); 
            headers.append('Accept', 'application/vnd.greenstork.v1');
            headers.append('Authorization', this.auth);    
            
        let options = new RequestOptions({  headers: headers, search: params }); 

        return this.http.get(`${this.baseUrl}/api/order_management/filter_order`,options)
        .map((response: Response) => response.json())

    }

    getOrderDetail(id: any){
        let params = new URLSearchParams();
            params.set('id',id);
            
        
        let headers = new Headers({ 
            'Content-Type': 'application/json'
            }); 
            headers.append('Accept', 'application/vnd.greenstork.v1');
            headers.append('Authorization', this.auth);    
            
        let options = new RequestOptions({  headers: headers, search: params }); 

        return this.http.get(`${this.baseUrl}/api/order_management/filter_order`,options)
        .map((response: Response) => response.json())

    }

    resetPasswordInstructions (email){
        let data = { user: { data: { email:email } } }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        headers.append('Accept', 'application/vnd.greenstork.v1');
        headers.append('Authorization', this.auth);
        
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.baseUrl}/api/order_management/forgot_password`, data, options)
        .map((response: Response) => response.json())
    }

    codeConfirm(id, code){
        let data = { user: { data: { id: id, attributes: { code: code } } } }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        headers.append('Accept', 'application/vnd.greenstork.v1');
        headers.append('Authorization', this.auth);
        
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.baseUrl}/api/order_management/users/code_verification`, data, options)
        .map((response: Response) => response.json())
    }

    resetPassword(id: string, password: string){
        let data = { user: { data: { id: id, attributes: { password: password } } } }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        headers.append('Accept', 'application/vnd.greenstork.v1');
        headers.append('Authorization', this.auth);
        
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.baseUrl}/api/order_management/users/update_password`, data, options)
        .map((response: Response) => response.json())
    }


    
}
  