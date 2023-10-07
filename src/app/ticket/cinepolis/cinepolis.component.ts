import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})



export class CinepolisComponent {
  nombre: string="";
  boletos: number = 0;
  compradores: number = 0;
  tarjeta: string = "";
  total: number = 0;
  mensajeCompra:  string = "";
  boletosPermitidos: number = 0;


  compraCinepolis(){
    this.total = 0;
    this.boletosPermitidos = this.boletos / this.compradores;

    if (this.boletosPermitidos > 7) {
      this.mensajeCompra = "SOLO SE PERMITEN COMO MÁXIMO 7 BOLETOS POR PERSONA, TONTO...";
    }
    else{
  
      if(this.boletos <= 2){
        if(this.tarjeta == "SI"){
          this.total = (this.boletos * 12) * 0.9
          this.mensajeCompra = "DESCUENTO --> EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
        else{
          this.total = (this.boletos * 12)
          this.mensajeCompra = "EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
      }

      else if(this.boletos > 2 && this.boletos <= 5){
        if(this.tarjeta == "SI"){
          this.total = ((this.boletos * 12) * 0.9) * 0.9
          this.mensajeCompra = "DESCUENTO --> EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
        else{
          this.total = (this.boletos * 12) * 0.9
          this.mensajeCompra = "EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
      }

      else if(this.boletos > 5){
        if(this.tarjeta == "SI"){
          this.total = ((this.boletos * 12) * 0.85) * 0.9
          this.mensajeCompra = "DESCUENTO --> EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
        else{
          this.total = (this.boletos * 12) * 0.85
          this.mensajeCompra = "EL TOTAL A PAGAR ES: $" + this.total + " PARA " + this.compradores + " PERSONAS";
        }
      }

      if(this.boletos == 0){
        this.mensajeCompra = "POR FAVOR, INGRESE UN VALOR...";
      }
    }
  }

  cancelar(){
    this.nombre = "";
    this.boletos = 0;
    this.compradores = 0;
    this.tarjeta = "";
    this.total = 0;
    this.mensajeCompra = "";
    this.boletosPermitidos = 0;
  }
}
