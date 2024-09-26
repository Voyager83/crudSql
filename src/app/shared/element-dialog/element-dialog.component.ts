import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from '../../pages/tabela/tabela.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.css',
})
export class ElementDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pessoa: Pessoa }
  ) {}
}
