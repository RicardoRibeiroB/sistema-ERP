import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

//   @ViewChild(IonModal) modal!: IonModal;

cidade: string = '';
rua: string = '';
bairro: string = '';
cep: string = '';

// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }

// confirm() {
//   this.modal.dismiss(this.rua, 'confirm');
//   this.modal.dismiss(this.cidade, 'confirm');
//   this.modal.dismiss(this.bairro, 'confirm');
//   this.modal.dismiss(this.cep, 'confirm');
// }





  activeDiv: string = 'div1';

  constructor() {  }

  ngOnInit() {
  }


  


  login: boolean = true;

  showDiv(divId: string) {
    this.activeDiv = divId;
  }

}
