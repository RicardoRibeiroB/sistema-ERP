import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
  styleUrls: ['./cliente-login.page.scss'],
})
export class ClienteLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = {
    email: null,
    senha: null,
    conectado: false,
    token: null
  };
  
  lembrarSenha: boolean = false;  
  logar(form: any){
    let cliente = form;
    console.log(cliente);
    // fetch('http://localhost/',
		// 	{
		// 	  method: 'POST',
		// 	  headers: {
		// 	    'Content-Type': 'application/json',
		// 	  },
		// 	  body: JSON.stringify(cliente)
		// 	}
		// )
    // .then(response => response.json())
    // .then(response => {
    //   this.user = response;
    //   console.log(this.user);
    // })    
    // .catch(erro => {
    //   console.log(erro);
    // })
    // .finally(()=>{
      
    //   console.log('processo finalizado');
    // })
  }

}
