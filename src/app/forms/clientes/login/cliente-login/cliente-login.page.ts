import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  logar() {
    if (!this.user.email || !this.user.senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    this.http.post('http://127.0.0.1:8000/api/v1/login-professor', this.user)
      .subscribe({
        next: (response: any) => {
          console.log('Login bem-sucedido:', response);
          alert('Login realizado com sucesso!');
          
        },
        error: (err) => {
          console.error('Erro no login:', err);
          alert('Credenciais inválidas ou erro na autenticação. Tente novamente.');
        },
        complete: () => {
          console.log('Processo de login finalizado.');
        }
      });
  }
}
