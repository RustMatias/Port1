import { Component, Input, OnInit } from '@angular/core';
import { myProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {

  @Input() project:myProject = {
    name: '',
    description: '',
    imgpath: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
