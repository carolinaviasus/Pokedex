import { Component } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  constructor(
  // private pokeApiService: PokeApiService
  ) { }
  ngOnInit(): void {
  }
  vermas(){
    console.log('ir a ver mas')
  }
}
