import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-dash',
  templateUrl: './pre-dash.page.html',
  styleUrls: ['./pre-dash.page.scss'],
})
export class PreDashPage implements OnInit {

  courses: any[] = [];

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    fetch('http://127.0.0.1:8000/api/v1/courses', { 
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Erro ao buscar os cursos');
        }
        return resp.json();
      })
      .then(data => {
        this.courses = data; 
        console.log('Cursos carregados:', this.courses);
      })
      .catch(erro => {
        console.error('Erro ao buscar os cursos:', erro);
        alert('Erro ao carregar os cursos. Tente novamente mais tarde.');
      })
      .finally(() => {
        console.log('Processo de carregamento de cursos finalizado.');
      });
  }
  

}
