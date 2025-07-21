// Datos de la malla con prerrequisitos
const malla = {
  'Primer año - Primer semestre': [
    { id: 'anatomia_humana', nombre: 'Anatomía humana', prereq: [] },
    { id: 'biologia_celular', nombre: 'Biología celular', prereq: [] },
    { id: 'lab_bio_celular', nombre: 'Laboratorio de biología celular', prereq: [] },
    { id: 'quimica_general', nombre: 'Química general', prereq: [] },
    { id: 'intro_tec_med', nombre: 'Introducción a la tecnología médica', prereq: [] },
    { id: 'algebra_calculo', nombre: 'Elementos de álgebra y cálculo', prereq: [] }
  ],
  'Primer año - Segundo semestre': [
    { id: 'histoembriologia', nombre: 'Histoembriología', prereq: ['anatomia_humana', 'biologia_celular'] },
    { id: 'fisica_general', nombre: 'Física general', prereq: ['algebra_calculo'] },
    { id: 'quimica_organica', nombre: 'Química orgánica', prereq: [] },
    { id: 'ingles_1', nombre: 'Inglés I', prereq: [] },
    { id: 'habilidades_comunicativas', nombre: 'Habilidades comunicativas', prereq: [] }
  ],
  // ... (mantén el resto igual, no los pongo todos para acortar)
};

// Estado inicial, recupera del localStorage si hay datos guardados
let estado = JSON.parse(localStorage.getItem('mallaEstado')) || {};

// Guarda el estado en localStorage
function guardarEstado() {
  localStorage.setItem('mallaEstado', JSON.stringify(estado));
}

// Crea la tarjeta para cada ramo
function crearTarjeta(ramo) {
  const div = document.createElement('div');
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  div.classList.add('ramo');

  if (estado[ramo.id]) {
    div.classList.add('aprobado');
  } else if (puedeDesbloquear(ramo)) {
    div.classList.add('desbloqueado');
    div.style.cursor = 'pointer';
    div.addEventListener('click', () => {
      aprobarRamo(ramo.id);
    });
  } else {
    div.classList.add('bloqueado');
  }
  return div;
}

// Verifica si se pueden desbloquear (todos los prereq aprobados)
function puedeDesbloquear(ramo) {
  // Si no tiene prereq, se puede desbloquear siempre
  if (ramo.prereq.length === 0) return true;

  return ramo.prereq.every(pr => estado[pr]);
}

// Marca un ramo como aprobado y actualiza la malla
function aprobarRamo(id) {
  estado[id] = true;
  guardarEstado();
  actualizarMalla();
}

// Actualiza la visualización de la malla y la barra de progreso
function actualizarMalla() {
  const container = document.getElementById('malla-container');
  container.innerHTML = '';
  let totalRamos = 0;
  let aprobados = 0;

  for (const semestre in malla) {
    const divSemestre = document.createElement('div');
    divSemestre.classList.add('semestre');

    const titulo = document.createElement('h3');
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    malla[semestre].forEach(ramo => {
      totalRamos++;
      if (estado[ramo.id]) aprobados++;
      const tarjeta = crearTarjeta(ramo);
      divSemestre.appendChild(tarjeta);
    });

    container.appendChild(divSemestre);
  }

  // Barra de progreso
  const barra = document.getElementById('barra');
  const porcentaje = totalRamos === 0 ? 0 : Math.round((aprobados / totalRamos) * 100);
  barra.style.width = porcentaje + '%';
  barra.textContent = porcentaje + '%';
}

// Inicializa la malla al cargar
actualizarMalla();
