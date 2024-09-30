import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'moment/locale/br';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ElementDialogComponent } from './shared/element-dialog/element-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatActionList,
  MatListItem,
  MatListModule,
} from '@angular/material/list';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CadastroContatoComponent } from './pages/tabela/cadastro-contato/cadastro-contato.component';
import { CadastroPessoaComponent } from './pages/tabela/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroEnderecoComponent } from './pages/tabela/cadastro-endereco/cadastro-endereco.component';
import { TabelaPessoaComponent } from './pages/tabela/tabela-pessoa/tabela-pessoa.component';
import { TabelaContatoComponent } from './pages/tabela/tabela-contato/tabela-contato.component';
import { TabelaEnderecoComponent } from './pages/tabela/tabela-endereco/tabela-endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ElementDialogComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    CadastroContatoComponent,
    CadastroPessoaComponent,
    CadastroEnderecoComponent,
    TabelaPessoaComponent,
    TabelaContatoComponent,
    TabelaEnderecoComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
