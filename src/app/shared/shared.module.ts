import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatActionList, MatListItem, MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    ViewChild,
    Component,
    FormBuilder,
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
    FormGroup,
    Validators,
    MatDialog,
    FormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    ViewChild,
    Component,
    FormBuilder,
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
    FormGroup,
    Validators,
    MatDialog,
    FormsModule,
    SharedModule,
  ]


})
export class SharedModule { }
