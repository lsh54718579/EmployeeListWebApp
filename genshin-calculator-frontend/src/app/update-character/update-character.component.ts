import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  id: number;
  character: Character = new Character();

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.characterService.getCharacterById(this.id).subscribe(data => {
      this.character = data;
    }, error => console.log(error));
  }


  goToCharacterList(){
    this.router.navigate(['/characters']);
  }

  onSubmit(){
    this.characterService.updateCharacter(this.id, this.character).subscribe(data => 
      {console.log(data);
      this.character = new Character();
      this.goToCharacterList();
      }, error => console.log(error));  
    }
}
