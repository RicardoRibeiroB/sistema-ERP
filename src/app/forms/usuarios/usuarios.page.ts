import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { HttpClient } from '@angular/common/http';  // Já importado corretamente
import { Router } from '@angular/router';  

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

  // Injete o HttpClient no construtor
  constructor(private http: HttpClient, private router: Router) { }  // Correção: injeção do HttpClient e Router

  logar() {
    if (!this.aluno.email || !this.aluno.senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    this.http.post('http://127.0.0.1:8000/api/v1/login-aluno', this.aluno)
      .subscribe({
        next: (response: any) => {
          console.log('Login bem-sucedido:', response);
          alert('Login realizado com sucesso!');
  
          // Fechar o modal antes de navegar
          this.isModalOpen = false;
  
          // Verificar se já estamos na página 'home'
          this.router.navigate(['/home']).then((nav) => {
            if (!nav) {
              console.log('Já está na página Home.');
            } else {
              console.log('Navegação para Home realizada.');
            }
          }).catch((err) => {
            console.error('Erro ao redirecionar para Home:', err);
          });
        },
        error: (err: any) => {
          console.error('Erro no login:', err);
          alert('Credenciais inválidas ou erro na autenticação. Tente novamente.');
        },
        complete: () => {
          console.log('Processo de login finalizado.');
        }
      });
  }
  
  

  adicionarAlunos() {
    console.log(this.aluno);
    fetch('http://127.0.0.1:8000/api/v1/aluno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.aluno)
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {   
        console.log('processo finalizado');
      });
  }

  activeDiv: string = 'div1';

  ngOnInit() {
  }

  login: boolean = true;

  showDiv(divId: string) {
    this.activeDiv = divId;
  }

}
