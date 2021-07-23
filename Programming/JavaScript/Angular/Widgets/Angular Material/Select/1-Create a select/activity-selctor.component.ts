import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-selector',
  templateUrl: './activity-selector.component.html',
  styleUrls: ['./activity-selector.component.css']
})
export class ActivitySelectorComponent implements OnInit 
{
    toppings = new FormControl();

    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    constructor() { }

    ngOnInit(): void {}
}