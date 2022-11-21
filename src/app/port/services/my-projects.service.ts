import { Injectable } from '@angular/core';
import { myProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  private projects: myProject[] = [{
    name: 'Restourant "Acorn Pizza"',
    description: 'A pizzeria website, SPA',
    imgpath: "./assets/project-asset.jpg"
  },{
    name: 'Restourant "Acorn Pizza"',
    description: 'A pizzeria website, SPA',
    imgpath: "./assets/project-asset.jpg"
  },{
    name: 'Restourant "Acorn Pizza"',
    description: 'A pizzeria website, SPA',
    imgpath: "./assets/project-asset.jpg"
  },{
    name: 'Restourant "Acorn Pizza"',
    description: 'A pizzeria website, SPA',
    imgpath: "./assets/project-asset.jpg"
  },]

  get myProjects(){
    return [...this.projects]
  }

  constructor() { }
}
