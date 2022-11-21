import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../../services/my-services.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {


  get myServices(){
    return this.myServicesS.myServices
  }

  constructor(
    private myServicesS: MyServicesService
  ) { }

  ngOnInit(): void {
  }

}
