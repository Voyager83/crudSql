import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from '../../shared/element-dialog/element-dialog.component';

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
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
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
