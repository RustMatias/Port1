import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../../services/my-services.service';
import { MyProjectsService } from '../../services/my-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  get projects(){
    return this.projectService.myProjects
  }

  constructor(
    private projectService: MyProjectsService
  ) { }

  ngOnInit(): void {
  }

}
