import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  //Two way binding
  character: Character = new Character();

  constructor(private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCharacter(){
    this.characterService.addCharacter(this.character).subscribe(data =>{
      console.log(data);
      this.goToCharacterList();
    },
    error => console.log(error));
  }

  goToCharacterList(){
    this.router.navigate(['/characters']);
  }

  onSubmit(){
    this.saveCharacter();
  }

}
