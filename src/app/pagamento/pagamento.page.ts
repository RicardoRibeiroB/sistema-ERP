import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen: boolean = false;
  selectedPayment: string | null = null;
  isPixSelected: boolean = false;
  isCardSelected: boolean = false;

  selectPayment(paymentType: string) {
    if (paymentType === 'pix') {
      this.isPixSelected = !this.isPixSelected;
      this.isCardSelected = false;
      this.selectedPayment = this.isPixSelected ? 'pix' : null;
    } else if (paymentType === 'card') {
      this.isCardSelected = !this.isCardSelected;
      this.isPixSelected = false;
      this.selectedPayment = this.isCardSelected ? 'card' : null;
    }

    // Abre o modal apenas se uma opção estiver selecionada
    this.isModalOpen = this.selectedPayment !== null;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPayment = null;
    this.isPixSelected = false;
    this.isCardSelected = false;
  }

}
