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
    constructor(public headerService: HeaderService) {}

    ngOnInit(): void 
    {
        this.attribute_created_by_me = this._headerService.getHeader();
    }
}