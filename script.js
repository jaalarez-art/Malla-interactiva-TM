// Define tu malla con estructura correcta aquí, ejemplo:
const malla = {
  "1 - Semestre 1": [
    { id: "mat1", nombre: "Matemáticas I", prereq: [] },
    { id: "fis1", nombre: "Física I", prereq: [] }
  ],
  "1 - Semestre 2": [
    { id: "mat2", nombre: "Matemáticas II", prereq: ["mat1"] },
    { id: "fis2", nombre: "Física II", prereq: ["fis1"] }
  ],
  // Añade los demás semestres y materias...
};

let estado = JSON.parse(localStorage.getItem('mallaEstado')) || {};

function guardarEstado() {
  localStorage.setItem('mallaEstado', JSON.stringify(estado));
}

function crearTarjeta(ramo) {
  const div = document.createElement('div');
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  div.classList.add('ramo');

  if (estado[ramo.id]) {
    div.classList.add('aprobado');
  } else if (puedeDesbloquear(ramo)) {
    div.classList.add('desbloqueado');
    div.addEventListener('click', () => {
      aprobarRamo(ramo.id);
    });
  } else {
    div.classList.add('bloqueado');
  }

  return div;
}

function puedeDesbloquear(ramo) {
  // Si prereq está vacío, se puede desbloquear siempre
  return ramo.prereq.every(pr => estado[pr]);
}

function aprobarRamo(id) {
  estado[id] = true;
  guardarEstado();
  actualizarMalla();
}

function actualizarMalla() {
  const container = document.getElementById('malla-container');
  container.innerHTML = '';

  const agrupadoPorAno = {};

  for (const semestre in malla) {
    const [ano, nombreSemestre] = semestre.split(' - ');
    if (!agrupadoPorAno[ano]) agrupadoPorAno[ano] = [];
    agrupadoPorAno[ano].push({
      nombre: nombreSemestre,
      ramos: malla[semestre]
    });
  }

  for (const ano in agrupadoPorAno) {
    const divAno = document.createElement('div');
    divAno.classList.add('ano');

    const tituloAno = document.createElement('h2');
    tituloAno.textContent = `Año ${ano}`;
    divAno.appendChild(tituloAno);

    const contenedorSemestres = document.createElement('div');
    contenedorSemestres.classList.add('columnas-semestres');

    agrupadoPorAno[ano].forEach(semestre => {
      const divSemestre = document.createElement('div');
      divSemestre.classList.add('semestre');

      const tituloSemestre = document.createElement('h3');
      tituloSemestre.textContent = semestre.nombre;
      divSemestre.appendChild(tituloSemestre);

      semestre.ramos.forEach(ramo => {
        const tarjeta = crearTarjeta(ramo);
        divSemestre.appendChild(tarjeta);
      });

      contenedorSemestres.appendChild(divSemestre);
    });

    divAno.appendChild(contenedorSemestres);
    container.appendChild(divAno);
  }

  actualizarBarraProgreso();
}

function actualizarBarraPr
