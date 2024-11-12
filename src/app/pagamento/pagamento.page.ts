import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  isModalOpen = false;
  selectedPayment = '';
  isPixSelected = false;
  isCardSelected = false;

  payment = {
    type: '',
    plano: '',  // Aqui armazenamos o plano selecionado
    status: false,  // Inicializa o status como false
    valor: 0.00,
    chavePix: false,
    numeroCartao: '',
    validade: '',
    cvv: ''
  };

  constructor() {}

  ngOnInit() {}

  selectPayment(type: string) {
    this.selectedPayment = type;
    this.isModalOpen = true;

    if (type === 'pix') {
      this.isPixSelected = true;
      this.isCardSelected = false;
      this.payment.type = 'pix';
    } else if (type === 'card') {
      this.isCardSelected = true;
      this.isPixSelected = false;
      this.payment.type = 'card';
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateValue(plano: string) {
    this.payment.plano = plano;
    if (plano === 'basico') {
      this.payment.valor = 0.00;
    } else if (plano === 'premium') {
      this.payment.valor = 15.00;
    } else if (plano === 'profissional') {
      this.payment.valor = 9.99;
    }
  }

  submitPayment() {
    // Antes de enviar, altera o status para true
    this.payment.status = true;
    this.payment.chavePix = true;

    console.log(this.payment);
    fetch('http://127.0.0.1:8000/api/v1/pagamento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.payment)
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Processo finalizado');
    });
  }
}
