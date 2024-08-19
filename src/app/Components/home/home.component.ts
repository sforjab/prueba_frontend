import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string;

  constructor() {
    this.title = 'Bienvenido a la Página de Inicio';
  }

  ngOnInit(): void {
    // Puedes agregar lógica adicional que deba ejecutarse cuando se inicie el componente
  }
}
