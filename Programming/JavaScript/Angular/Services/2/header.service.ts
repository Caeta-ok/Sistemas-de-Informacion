import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable
({
    providedIn: 'root'
})
export class HeaderService 
{
    constructor(private http: HttpClient) { }
    getHeader():string
    {
        return "Header from service";
    }
}
