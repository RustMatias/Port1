import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ItemServiceComponent } from './components/item-service/item-service.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemProjectComponent } from './components/item-project/item-project.component';



@NgModule({
  declarations: [
    MainComponent,
    PresentationComponent,
    MyServicesComponent,
    ItemServiceComponent,
    MyProjectsComponent,
    AboutComponent,
    ContactComponent,
    ItemProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainComponent
  ]
})
export class PortModule { }
