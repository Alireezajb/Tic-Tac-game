import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button *ngIf="!value">{{value}}</button>
  
  <button *ngIf="value == 'X' " class="x">{{value}}</button>
  <button *ngIf="value == 'O' " class="o">{{value}}</button>`,

  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
