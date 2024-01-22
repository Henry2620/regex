const palabras = ["Examen", "Exudatory", "Exultancy", "Contextoy"];

const palabrasFiltradas = palabras.filter(palabra => /[xy]/i.test(palabra) && palabra.length === 9);

alert(palabrasFiltradas);
