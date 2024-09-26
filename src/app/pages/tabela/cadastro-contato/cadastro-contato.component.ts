import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrl: './cadastro-contato.component.css',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],

})

export class CadastroContatoComponent {

}
