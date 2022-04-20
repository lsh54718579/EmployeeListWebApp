import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  displayedColumns: string[] = ['Character', 'Level', 'Attack', 'Defense', 'HP', 'Actions'];
  character: Character[];

  dataSource: MatTableDataSource<Character>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(){
    this.characterService.getCharacterList().subscribe({
      next:(data) => {
        this.character = data;
      this.dataSource = new MatTableDataSource(this.character);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.character);
    },
    error:(err) => {
      alert("Error getting records!")
    }
  })
  }

  updateCharacter(id: number){
    // console.log("hello "+ id);
    this.router.navigate(['update-character', id]);
  }

  deleteCharacter(id: number){
    this.characterService.deleteCharacter(id).subscribe(data => {
      console.log(data);
      this.getCharacters();
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
