import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent2 } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent2,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
