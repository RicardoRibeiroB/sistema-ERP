import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { HttpClient } from '@angular/common/http';  // Importado corretamente
import { Router } from '@angular/router';  
import { Location } from '@angular/common'; // Importando Location para verificar a URL atual

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
  constructor(
    private http: HttpClient, 
    private router: Router,
    private location: Location // Injetando Location
  ) { }

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
  
          // Redirecionar para a página home após o login bem-sucedido
          this.router.navigate(['/home'], { skipLocationChange: true }).then((nav) => {
            if (nav) {
              console.log('Navegação para Home realizada.');
            } else {
              console.log('Erro: já estamos na página Home.');
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
        console.log('Cadastro realizado com sucesso:', resp);
        alert('Cadastro realizado com sucesso! Agora você será redirecionado para o login.');

        // Redireciona para a tela de login automaticamente
        this.activeDiv = 'div2';

        // Iniciar login automático
        this.logar();
      })
      .catch(erro => {
        console.error('Erro no cadastro:', erro);
      })
      .finally(() => {
        console.log('Processo de cadastro finalizado');
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
