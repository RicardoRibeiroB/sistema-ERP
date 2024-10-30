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
  nome: string = '';
nomeEmpresa: string = '';
email: string = '';
senha: string = '';
lembrarCadastro: boolean = false;

  adicionarProfessores(form: any){
    let cliente = form;
    console.log(form);
    // fetch('http://localhost/tcc2/cadastro_usuario/cadastro.php',
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
