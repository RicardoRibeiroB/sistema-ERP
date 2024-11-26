import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
  styleUrls: ['./cliente-login.page.scss'],
})
export class ClienteLoginPage implements OnInit {

  lembrarSenha: boolean = false;

  user = {
    email: '',
    senha: '',
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  logar() {
    if (!this.user.email || !this.user.senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    fetch('http://127.0.0.1:8000/api/v1/login-professor', {
      method: 'POST',  // Altere para POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.user)
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Erro no login');
        }
        return resp.json();
      })
      .then(resp => {
        console.log('Login bem-sucedido:', resp);
        alert('Login realizado com sucesso!');
        this.router.navigate(['/home']);  // Redireciona após o login
      })
      .catch(erro => {
        console.error('Erro no login:', erro);
        alert('Credenciais inválidas ou erro na autenticação. Tente novamente.');
      })
      .finally(() => {
        console.log('Processo de login finalizado.');
      });
  }
  
}
