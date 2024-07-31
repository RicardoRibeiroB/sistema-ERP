import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  activeDiv: string = 'div1';

  constructor() {  }

  ngOnInit() {
  }


  login: boolean = true;

  showDiv(divId: string) {
    this.activeDiv = divId;
  }

}
