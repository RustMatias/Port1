import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { myService } from '../../interfaces/service.interface';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.css']
})
export class ItemServiceComponent implements OnInit {

  @ViewChild('svg') svg!: ElementRef<HTMLDivElement>

  @Input() service: myService ={
    title: '',
    description: '',
    color: '',
    level: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
