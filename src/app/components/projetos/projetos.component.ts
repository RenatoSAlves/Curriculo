import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  replaceLab():void{
    window.location.replace("https://gitlab.com/RenatoSakasaki")
  }

  replaceHub():void{
    window.location.replace("https://github.com/RenatoSAlves")
  }

}
