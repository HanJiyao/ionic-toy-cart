import { Injectable } from '@angular/core';
import { Toy } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ToyService {

    private toysUrl = '../assets/img/products.json';
    constructor(private http: HttpClient) { }
    getToys(): Observable<Toy[]> {
        return this.http.get<Toy[]>(this.toysUrl);
    } 

}