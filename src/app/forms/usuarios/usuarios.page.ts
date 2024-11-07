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

// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }

// confirm() {
//   this.modal.dismiss(this.rua, 'confirm');
//   this.modal.dismiss(this.cidade, 'confirm');
//   this.modal.dismiss(this.bairro, 'confirm');
//   this.modal.dismiss(this.cep, 'confirm');
// }

aluno = {
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: '',
  lembrarCadastro: false,
  localizacao: {
    cidade: '',
    rua: '',
    bairro: '',
    cep: '',
    estado: ''
  }
};

loginData = {
  email: '',
  senha: '',
  lembrarSenha: false
};

logar(form: any) {
  console.log(form);
  
}


  adicionarAlunos(){
    console.log(this.aluno)
    fetch('http://127.0.0.1:8000/api/v1/aluno',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.aluno)
    })
    .then(resp => resp.json())
    .then(resp=> {
     
      console.log(resp);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{   
      console.log('processo finalizado');
    })
  }



  activeDiv: string = 'div1';

  constructor() {  }

  ngOnInit() {
  }


  


  login: boolean = true;

  showDiv(divId: string) {
    this.activeDiv = divId;
  }

}
