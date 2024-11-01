import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appestadistica';

  cantidadDeEntradas: number = 0;

  //La n cantidad de numeros 
  //numeros: number[] = []

  //numeros con datos cargados con fines de prueba
  //comentar cuando se quuiera que el usuario agregue los datos
  numeros: number[] = [
    70, 75, 76, 77, 80, 82, 83, 84, 85, 85, 88, 90, 91, 95, 97, 98, 100, 102,
    105, 108, 110, 112, 115, 120,
  ];
  numerosOrdenados: number[] = [];
  rango: number = 0;
  amplitud: number = 0;
  numeroDeClases: number = 0;
  mediaAritmetica: number = 0;
  mediana: number = 0;
  modaEmpirica: number | null = null;

  // Variables para el cálculo de moda con fórmula delta
  limiteInferiorClaseModal: number = 83.5; // Límite inferior de la clase modal
  delta1: number = 1; // Diferencia entre el valor modal y la clase anterior
  delta2: number = 2; // Diferencia entre el límite superior de la clase modal y el valor modal
  h: number = 7; // Amplitud de clase
  modaConDelta: number = 0;

  // Variables para calculos de medidas de disperción
  varianza: number = 0; 
  desviacionEstandar: number = 0;
  coeficienteVariacion: number = 0;

  generarEntradas() {
    this.numeros = Array(this.cantidadDeEntradas);
  }

  alCambiarEntrada() {
    this.numerosOrdenados = [];
    this.rango = 0;
    this.amplitud = 0;
    this.numeroDeClases = 0;
    this.mediaAritmetica = 0;
    this.mediana = 0;
    this.varianza = 0;
  }

  ordenarNumeros() {
    this.numerosOrdenados = this.numeros
      .filter((num) => num !== undefined)
      .sort((a, b) => a - b);
    this.calcularRango();
    this.calcularAmplitud();
    this.calcularNumeroDeClases();
    this.calcularMediaAritmetica();
    this.calcularMediana();
    this.calcularModaEmpirica();
    this.calcularModaConDelta();
    this.calcularVarianza();
    this.calcularDesviacionEstandar();
    this.calcularCoeficienteVariacion()
  }

  calcularRango() {
    const min = this.numerosOrdenados[0];
    const max = this.numerosOrdenados[this.numerosOrdenados.length - 1];
    this.rango = max - min;
  }

  calcularAmplitud() {
    this.amplitud = Math.round(Math.sqrt(this.rango));
  }

  calcularNumeroDeClases() {
    this.numeroDeClases = Math.round(this.rango / this.amplitud) + 1;
  }

  calcularMediaAritmetica() {
    const suma = this.numerosOrdenados.reduce((acc, curr) => acc + curr, 0);
    this.mediaAritmetica = suma / this.numerosOrdenados.length;
  }

  calcularMediana() {
    const n = this.numerosOrdenados.length;
    if (n % 2 === 0) {
      const mid1 = this.numerosOrdenados[n / 2 - 1];
      const mid2 = this.numerosOrdenados[n / 2];
      this.mediana = (mid1 + mid2) / 2;
    } else {
      this.mediana = this.numerosOrdenados[Math.floor(n / 2)];
    }
  }

  calcularModaEmpirica() {
    const frecuencia: { [key: number]: number } = {};

    this.numerosOrdenados.forEach((num) => {
      frecuencia[num] = (frecuencia[num] || 0) + 1;
    });

    let maxFrecuencia = 0;
    let moda = null;
    for (const num in frecuencia) {
      if (frecuencia[num] > maxFrecuencia) {
        maxFrecuencia = frecuencia[num];
        moda = Number(num);
      }
    }

    this.modaEmpirica = moda;
  }

  calcularModaConDelta() {
    this.modaConDelta =
      this.limiteInferiorClaseModal + (this.delta1 / (this.delta1 + this.delta2)) * this.h;
  }

  calcularVarianza() {
    const n = this.numerosOrdenados.length;
    if (n > 1) {
      const media = this.mediaAritmetica;
      const sumaCuadrados = this.numerosOrdenados.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
      this.varianza = sumaCuadrados / (n - 1); // Varianza muestral
    }
  }

  calcularDesviacionEstandar() {
    this.desviacionEstandar = Math.sqrt(this.varianza);
  }

  calcularCoeficienteVariacion() {
    if (this.mediaAritmetica !== 0) {
      this.coeficienteVariacion = (this.desviacionEstandar / this.mediaAritmetica) * 100;
    } else {
      this.coeficienteVariacion = 0; // Evitar división por cero
    }
  }
}
