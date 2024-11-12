import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router para navegação

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {

  constructor(private router: Router) { }  // Injeta o Router no construtor

  ngOnInit() {
  }

  cliente = {
    nome: '',
    empresa: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cpf_rg_cnpj: '',
    lembrarCadastro: false,
  };

  // Método para adicionar o cliente
  adicionarProfessores() {
    console.log(this.cliente);

    // Verifique se as senhas coincidem antes de fazer a requisição
    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Envia os dados para a API
    fetch('http://127.0.0.1:8000/api/v1/professor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.cliente)
    })
      .then(resp => {
        if (!resp.ok) {
          // Caso a resposta da API não seja OK, lança um erro
          throw new Error('Erro ao cadastrar o professor');
        }
        return resp.json();
      })
      .then(resp => {
        console.log('Cadastro realizado com sucesso:', resp);
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/cliente-login']);  // Redireciona para a tela de login
      })
      .catch(erro => {
        // Caso haja erro, exibe uma mensagem de erro
        console.error('Erro no cadastro:', erro);
        alert('Erro no cadastro. Tente novamente.');
      })
      .finally(() => {
        console.log('Processo de cadastro finalizado.');
      });
  }
}
