import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';

const routes: Routes = [
  //<router-outlet>in app.component.html will inject these pathes. 
  {path: 'characters', component: CharacterListComponent},
  {path: 'add-new-character', component: AddCharacterComponent},
  {path: 'update-character/:id', component: UpdateCharacterComponent},
  {path: '', redirectTo: 'characters', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
