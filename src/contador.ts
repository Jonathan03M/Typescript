export function contarParesImpares(inicio: number, fin: number, resultadoContadorDiv: HTMLElement | null): void {
    let pares = 0;
    let impares = 0;
  
    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }
  
    if (resultadoContadorDiv) {
      resultadoContadorDiv.innerHTML = `Cantidad de números pares: ${pares}\n<br>Cantidad de números impares: ${impares}`;
    }
  }
  