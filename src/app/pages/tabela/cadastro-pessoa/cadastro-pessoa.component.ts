import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ElementDialogComponent } from '../../../shared/element-dialog/element-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatActionList, MatListItem, MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


export function dataNascimentoValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const dataNascimento = control.value;
  const hoje = new Date();

  if (dataNascimento > hoje) {
    return { dataFutura: true };
  }
  return null;
}
@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css',
  standalone: true,
  imports:[ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    MatActionList,
    MatListModule,
    MatIconModule,
    MatListItem,
    MatTabsModule,
    ]
})
export class CadastroPessoaComponent {
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.formCrud = fb.group({
      nome: ['', Validators.required],
      dataNascimento: [[new Date()], [Validators.required]],
      profissao: [''],
      telefone: ['', [Validators.required, this.validatePhoneNumber]],
      rg: [''],
      email: [''],
    });

    this.formCrud
      .get('dataNascimento')
      ?.setValidators(dataNascimentoValidator);
  }
  validatePhoneNumber(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumberPattern = /^\d+$/; // Expressão regular para aceitar apenas números
    const valid = phoneNumberPattern.test(control.value); // Verifique se o valor contém apenas números
    return valid ? null : { invalidPhoneNumber: true }; // Retorne um objeto de erro se o valor não for válido
  }
  editarPessoa(pessoa: Pessoa): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: { pessoa },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  title = 'tccdotioanderson';
  displayedColumns: string[] = [
    'id',
    'nome',
    'profissao',
    'dataNascimento',
    'telefone',
    'rg',
    'actions',
  ];
  excluirPessoa(id: number) {
    const index = this.pessoas.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.pessoas.splice(index, 1);
      this.table.renderRows(); // Atualiza a exibição da tabela
    }
  }

  formCrud: FormGroup;
  pessoas: Pessoa[] = [];

  @ViewChild('table') table: any;
  showFiller: any;
  mostrarTabela: boolean | undefined;

  public onIncluirPessoa() {
    if (this.formCrud.invalid) {
      console.log('Por favor, preencha todos os campos');
      return;
    }
    let pessoa: Pessoa = {} as Pessoa;
    // Verificar se o RG já existe
    const rg = this.formCrud.get('rg')?.value;
    const rgExists = this.pessoas.some((c) => c.rg === rg);

    if (rgExists) {
      this.formCrud.get('rg')?.setErrors({ duplicate: true });
      return; // Abortar a adição se o RG já existe
    }

    // NOME DO ALUNO
    pessoa.nome = this.formCrud.get('nome')?.value;
    // DATA DE NASCIMENTO
    pessoa.dataNascimento = this.formCrud
      .get('dataNascimento')
      ?.value.toDateString('DD/MM/yyyy');
    // Profisao
    pessoa.profissao = this.formCrud.get('profissao')?.value;
    // TELEFONE
    pessoa.telefone = this.formCrud.get('telefone')?.value;
    // RG
    pessoa.rg = this.formCrud.get('rg')?.value;
    pessoa.email = this.formCrud.get('email')?.value;
    pessoa.id = this.pessoas.length + 1;
    this.pessoas.push(pessoa);
    console.log(this.pessoas);
    this.table.renderRows();
  }
  abrirTabela() {
    this.mostrarTabela = true;
  }
  limparCampos() {
    this.formCrud.reset();
  }
}
export interface Pessoa {
  nome: string;
  dataNascimento: Date;
  id: number;
  profissao: string;
  telefone: number;
  rg: number;
  email: string;
}

