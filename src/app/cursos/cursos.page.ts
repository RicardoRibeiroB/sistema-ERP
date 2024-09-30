import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit, AfterViewInit {
  cards = [
    {
      id: 1,
      title: 'Curso de Programação',
      institute: 'Instituto de Tecnologia',
      rating: 5,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 199.99,
      category: 'Programação'
    },
    {
      id: 2,
      title: 'Curso de Design Gráfico',
      institute: 'Escola de Artes Visuais',
      rating: 4,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 150.00,
      category: 'Design Gráfico'
    },
    {
      id: 3,
      title: 'Curso de Marketing Digital',
      institute: 'Universidade de Negócios',
      rating: 5,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 299.99,
      category: 'Marketing Digital'
    },
    {
      id: 4,
      title: 'Curso de Fotografia',
      institute: 'Escola de Fotografia',
      rating: 4,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 250.00,
      category: 'Fotografia'
    },
    {
      id: 5,
      title: 'Curso de Desenvolvimento Web',
      institute: 'Instituto de Tecnologia',
      rating: 5,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 299.99,
      category: 'Desenvolvimento Web'
    },
    {
      id: 6,
      title: 'Curso de Gestão de Projetos',
      institute: 'Faculdade de Negócios',
      rating: 3,
      image: '../../assets/img/Tela-Cursos/imagem-curso-exemplo.jpeg',
      price: 199.00,
      category: 'Gestão de Projetos'
    }
  ];
  
  

  constructor() {}

  ngOnInit() {
    console.log(this.cards);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5, 
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    console.log('Swiper inicializado:', swiper);
  }
}
