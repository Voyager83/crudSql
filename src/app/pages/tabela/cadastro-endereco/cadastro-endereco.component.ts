import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.css',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class CadastroEnderecoComponent {

}
