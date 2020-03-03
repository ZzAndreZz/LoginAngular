import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: string[] = [];
  animal: string;

  addAnimal() {
    this.lista.push(this.animal);
    this.animal = "";
  }

  rmvAnimal() {
    this.lista.pop();
    this.animal = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
