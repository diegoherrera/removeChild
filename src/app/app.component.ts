import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('contenedorPadre')
  private contenedorPadre: ElementRef;

  @ViewChild('contenedorHijo2')
  private contenedorHijo2: ElementRef;

  title = 'render2';
  constructor(private rendered: Renderer2) {     
  }

  onClickEvent() {
    let contiene = this.contenedorPadre.nativeElement;
    let elimino = this.contenedorHijo2.nativeElement;
    this.rendered.removeChild(contiene, elimino);
  }
}
