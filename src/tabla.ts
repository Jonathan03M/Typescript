// tabla.ts

export function mostrarTabla(numero: number, limite: number, resultadoTablaDiv: HTMLElement) {
  let tablaHTML = '<h2>Tabla de Multiplicar</h2>';
  tablaHTML += `<p>Tabla del ${numero} hasta el ${limite}:</p>`;
  tablaHTML += '<table>';
  tablaHTML += '<tr><th>Número</th><th>Resultado</th></tr>';

  for (let i = 1; i <= limite; i++) {
    const resultado = numero * i;
    tablaHTML += `<tr><td>${numero} x ${i}</td><td>${resultado}</td></tr>`;
  }

  tablaHTML += '</table>';
  resultadoTablaDiv.innerHTML = tablaHTML;
}
