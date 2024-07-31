import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppTranslateModule } from './modules/app-translate.module';



const components = [
  EmptyDataComponent,
]

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
  AppTranslateModule,
]


@NgModule({
  declarations: components,
  imports: modules,
  exports: [
    ...components, ...modules
  ],
})
export class SharedModule { }
