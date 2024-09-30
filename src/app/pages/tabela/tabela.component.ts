import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from '../../shared/element-dialog/element-dialog.component';

// export function dataNascimentoValidator(
//   control: AbstractControl
// ): { [key: string]: boolean } | null {
//   const dataNascimento = control.value;
//   const hoje = new Date();

//   if (dataNascimento > hoje) {
//     return { dataFutura: true };
//   }

//   return null;
// }
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {}
