import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

cliente = {
  nome: '',
  nomeEmpresa: '',
  email: '',
  senha: '',
  lembrarCadastro: false,
}


  adicionarProfessores(){
    console.log(this.cliente);
    // fetch('http://localhost/',
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(cliente)
    // })
    // .then(resp => resp.json())
    // .then(resp=> {
     
    //   console.log(resp);
    // })
    // .catch(erro => {
    //   console.log(erro);
    // })
    // .finally(()=>{   
    //   console.log('processo finalizado');
    // })
  }
}
