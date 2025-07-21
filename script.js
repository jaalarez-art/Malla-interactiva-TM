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
  'Segundo año - Tercer semestre': [
    { id: 'fisiologia_humana', nombre: 'Fisiología humana', prereq: ['histoembriologia'] },
    { id: 'bioquimica', nombre: 'Bioquímica', prereq: ['quimica_organica'] },
    { id: 'bioetica', nombre: 'Bioética', prereq: ['intro_tec_med', 'habilidades_comunicativas'] },
    { id: 'infectologia', nombre: 'Infectología', prereq: ['biologia_celular', 'lab_bio_celular'] },
    { id: 'ingles_2', nombre: 'Inglés II', prereq: ['ingles_1'] },
    { id: 'razonamiento_cientifico', nombre: 'Razonamiento científico y tecnologías de la investigación', prereq: ['habilidades_comunicativas'] }
  ],
  'Segundo año - Cuarto semestre': [
    { id: 'fisiopatologia', nombre: 'Fisiopatología', prereq: ['fisiologia_humana'] },
    { id: 'farmacologia_general', nombre: 'Farmacología general', prereq: ['bioquimica'] },
    { id: 'ingles_3', nombre: 'Inglés III', prereq: ['ingles_2'] },
    {
      id: 'proteccion_radiologica', nombre: 'Protección radiológica',
      prereq: ['fisiologia_humana', 'bioquimica', 'bioetica', 'infectologia', 'ingles_2', 'razonamiento_cientifico', 'fisica_general']
    },
    {
      id: 'radiodiagnostico_1', nombre: 'Radiodiagnóstico I',
      prereq: ['fisiologia_humana', 'bioquimica', 'bioetica', 'infectologia', 'ingles_2', 'razonamiento_cientifico', 'fisica_general']
    },
    {
      id: 'fisica_electromagnetica', nombre: 'Física electromagnética',
      prereq: ['fisiologia_humana', 'bioquimica', 'bioetica', 'infectologia', 'ingles_2', 'razonamiento_cientifico', 'fisica_general']
    }
  ],
  'Tercer año - Quinto semestre': [
    { id: 'procedimientos_tecnologia_med', nombre: 'Procedimientos de tecnología médica y bioseguridad', prereq: ['farmacologia_general'] },
    { id: 'salud_publica_1', nombre: 'Salud pública I', prereq: ['fisiopatologia'] },
    { id: 'ingles_4', nombre: 'Inglés IV', prereq: ['ingles_3'] },
    { id: 'fisica_moderna', nombre: 'Física moderna', prereq: ['proteccion_radiologica', 'fisica_electromagnetica'] },
    { id: 'radiodiagnostico_2', nombre: 'Radiodiagnóstico II', prereq: ['radiodiagnostico_1', 'farmacologia_general'] },
    { id: 'anatomia_imagenologica', nombre: 'Anatomía imagenológica', prereq: ['radiodiagnostico_1', 'fisiopatologia'] }
  ],
  'Tercer año - Sexto semestre': [
    { id: 'salud_publica_2', nombre: 'Salud pública II', prereq: ['salud_publica_1', 'procedimientos_tecnologia_med'] },
    { id: 'fisica_nuclear', nombre: 'Física nuclear', prereq: ['fisica_moderna'] },
    { id: 'tomografia_computarizada', nombre: 'Tomografía computarizada', prereq: ['radiodiagnostico_2', 'anatomia_imagenologica'] },
    { id: 'sistema_informatico_radiologia', nombre: 'Sistema informático en radiología', prereq: ['radiodiagnostico_2'] },
    { id: 'patologia_imagenologica', nombre: 'Patología imagenológica', prereq: ['radiodiagnostico_2', 'anatomia_imagenologica'] }
  ],
  'Cuarto año - Séptimo semestre': [
    { id: 'administracion_gestion_salud', nombre: 'Administración de gestión en salud', prereq: ['salud_publica_2', 'sistema_informatico_radiologia'] },
    { id: 'educacion_en_salud', nombre: 'Educación en salud', prereq: ['salud_publica_2'] },
    { id: 'medicina_nuclear', nombre: 'Medicina nuclear', prereq: ['fisica_nuclear'] },
    { id: 'intervencionismo_endovascular', nombre: 'Intervencionismo endovascular', prereq: ['patologia_imagenologica'] },
    { id: 'integrador_1', nombre: 'Integrador I: Caso clínico IFIME', prereq: ['tomografia_computarizada', 'sistema_informatico_radiologia', 'patologia_imagenologica'] },
    { id: 'ultrasonido', nombre: 'Ultrasonido', prereq: ['patologia_imagenologica'] }
  ],
  'Cuarto año - Octavo semestre': [
    { id: 'metodologia_investigacion', nombre: 'Metodología de la investigación', prereq: ['salud_publica_2', 'medicina_nuclear'] },
    { id: 'gestion_aseguramiento_calidad', nombre: 'Gestión y aseguramiento de la calidad', prereq: ['administracion_gestion_salud', 'medicina_nuclear'] },
    { id: 'pensamiento_critico', nombre: 'Pensamiento crítico', prereq: ['razonamiento_cientifico'] },
    { id: 'radioterapia', nombre: 'Radioterapia', prereq: ['intervencionismo_endovascular', 'integrador_1'] },
    { id: 'resonancia_magnetica', nombre: 'Resonancia magnética', prereq: ['integrador_1', 'ultrasonido'] }
  ],
  'Quinto año - Noveno semestre': [
    { id: 'responsabilidad_social', nombre: 'Responsabilidad social', prereq: ['pensamiento_critico'] },
    { id: 'seminario_investigacion_ifime', nombre: 'Seminario de investigación de IFIME', prereq: ['metodologia_investigacion', 'gestion_aseguramiento_calidad', 'pensamiento_critico', 'radioterapia', 'resonancia_magnetica'] }
  ],
  'Quinto año - Décimo semestre': [
    { id: 'integrador_2', nombre: 'Integrador II: Internado clínico IFIME', prereq: ['metodologia_investigacion', 'gestion_aseguramiento_calidad', 'pensamiento_critico', 'radioterapia', 'resonancia_magnetica'] }
  ]
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

  const barra = document.getElementById('barra');
  const porcentaje = Math.round((aprobados / totalRamos) * 100);
  barra.style.width = porcentaje + '%';
  barra.textContent = porcentaje + '%';
}

actualizarMalla();
function reiniciarMalla() {
  localStorage.removeItem('mallaEstado');
  estado = {};
  actualizarMalla();
}
document.getElementById('btnReiniciar').addEventListener('click', reiniciarMalla);
