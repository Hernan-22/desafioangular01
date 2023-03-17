import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PanelComponent } from './panel/panel.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    PanelComponent,
    CuerpoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    PanelComponent,
    CuerpoComponent
  ]
})
export class TableroprincipalModule { }
