import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8080/products';

    constructor(private httpClient: HttpClient) {
    }

    add(data: String): Observable<any> {
        return this.httpClient.post(this.baseUrl, data);
    }

    findAll(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }
}
