import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mostrarTabela: boolean | undefined;
  abrirTabela() {
    this.mostrarTabela = true;
  }
  showFiller: any;
}
