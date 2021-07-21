import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header.service';

@Component
({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent
{
    attribute_created_by_me: string = 'Hello new component';
    constructor(public headerService: HeaderService) 
    {
        this.headerService.getHeader('http://127.0.0.1:5000/').subscribe((res: any) => {console.log(res);});
    }
}