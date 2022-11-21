import { Injectable } from '@angular/core';
import { myService } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  private services: myService[] = [{
    title: "HTML",
    description: "Tags, Semantics, Ident",
    color: "#e54c21",
    level: '100%'
  },{
    title: "CSS",
    description: "ids",
    color: "#2277ff",
    level: '100%'
  },{
    title: "Java",
    description: "POO, DAO, DTO, Singleton, Persistece patterns, Spring",
    color: "#ef1f26",
    level: '50%'
  },{
    title: "JavaScript",
    description: "",
    color: "#efd81d",
    level: '75%'
  },{
    title: "Php",
    description: "",
    color: "#7377ad",
    level: '75%'
  },{
    title: "SQL",
    description: "",
    color: "#feb300",
    level: '50%'
  },{
    title: "NoSQL",
    description: "",
    color: "#feb300",
    level: '25%'
  },{
    title: "Trello",
    description: "",
    color: "#0079bf",
    level: '75%'
  },{
    title: "Jira",
    description: "",
    color: "#2684ff",
    level: '75%'
  },{
    title: "Scrum",
    description: "",
    color: "#5ec6d3",
    level: '50%'
  },{
    title: "Angular",
    description: "",
    color: "#dd0031",
    level: '75%'
  }]

  get myServices(){
    return [...this.services]
  }

  constructor() { }
}
