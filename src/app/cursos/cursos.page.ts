import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

interface CourseCard {
  id: number;
  title: string;
  institute: string;
  rating: number;
  image: string;
  price: number;
  category: string;
  type: 'premium' | 'free';  
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit, AfterViewInit {

  cards_free: CourseCard[] = [];
  cards_premium: CourseCard[] = [];

  constructor() {}

  ngOnInit() {
    this.loadCourses();
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('Swiper inicializado:', swiper);
  }

  loadCourses() {
    fetch('http://localhost/api/cursos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then((response: CourseCard[]) => {
      response.forEach(course => {
        if (course.type === 'free') {
          this.cards_free.push(course);
        } else if (course.type === 'premium') {
          this.cards_premium.push(course);
        }
      });
      console.log('Cursos gratuitos:', this.cards_free);
      console.log('Cursos premium:', this.cards_premium);
    })
    .catch(error => {
      console.error('Erro ao carregar cursos:', error);
    });
  }
}
