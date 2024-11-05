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
  confirmarSenha: '',
  cpf_rg_cnpj: '',
  lembrarCadastro: false,
}


  adicionarProfessores(){
    console.log(this.cliente);
    fetch('http://127.0.0.1:8000/api/v1/professor',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.cliente)
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
}
