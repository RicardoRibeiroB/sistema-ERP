import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit, AfterViewInit {

  cards_premium = [
    {
      id: 1,
      title: 'Inglês',
      institute: 'InglesFast',
      rating: 4,
      image: '../../assets/img/Tela-Cursos/ingles.png',
      price: 200.0,
      category: 'Idioma'
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

  cards_free = [
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
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.cards_premium);
    console.log(this.cards_free);


    // Parâmetros para acessar o buscar cursos sem perder dados
    this.route.queryParams.subscribe(params => {
      const scrollTo = params['scrollTo'];
      if (scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500); // Garante que o DOM já está renderizado
      }
    });
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto', // Corrigido para 'auto'
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

  navegarAteSobre(sobre: string) {
    this.router.navigate(['/home'], { queryParams: { scrollTo: sobre } });
  }

  navegarAtePlanos(planos: string) {
    this.router.navigate(['/home'], { queryParams: { scrollTo: planos } });
  }

  navegarAteEstude(estude: string) {
    this.router.navigate(['/home'], { queryParams: { scrollTo: estude } });
  }

  navegarAteHome(home: string) {
    this.router.navigate(['/home'], { queryParams: { scrollTo: home } });
  }

  navegarAteDivulgue(divulgue: string) {
    this.router.navigate(['/home'], { queryParams: { scrollTo: divulgue } });
  }


  // Rolar até a parte dos cursos
  scrollToBuscar() {
    const element = document.getElementById('buscar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
