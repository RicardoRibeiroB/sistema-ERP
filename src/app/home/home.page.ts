import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Rolar até o conteudo desejado

  scrollToPlans() {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToAbout() {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToInicio() {
    const element = document.getElementById('inicio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToEstudeConosco() {
    const element = document.getElementById('estude-conosco');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToDivulgue() {
    const element = document.getElementById('divulgue');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navegarParaCursos() {
    this.router.navigate(['/nome-da-pagina']);
  }

  navegarParaBuscar(buscar: string) {
    this.router.navigate(['/cursos'], { queryParams: { scrollTo: buscar } });
  }

  // Receber o valor de outra pagina e rolar até o conteúdo desejado

  ngOnInit() {
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

}