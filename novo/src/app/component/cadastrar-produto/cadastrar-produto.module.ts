import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class CadastrarProdutoModule { }