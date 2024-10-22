import express from 'express';  // O usa require si estás con CommonJS

const app = express();
const port = 3000;

const alumnos = [
  "Joan Puig",
  "Nahomy Argueta",
  "Dani Galeano",
  "Santiago Fernandez-Pedrera",
  "Satenik Avetisyan",
  "Oriol Fontcuberta Aduart",
  "Oscar Crueñas",
  "Elver Galarga",
  "Daniel Galeano",
  "Denis Podovei",
  "Ivan Vallejo",
  "Nil Marquez",
  "Òscar Cruañas",
  "Quim Pallarés",
  "Paul Aznar",
  "Quim Pallarés",
  "Laura Méndez",
  "Emilio Sánchez",
  "Carla Jiménez",
  "Manuel Rodríguez",
  "Valeria Hernández",
  "Ricardo Montes",
  "Adriana Campos",
  "Roberto Díaz",
  "Lucía Paredes",
  "Gabriel Fernández",
  "Esteban Moreno",
  "Sofía Castro",
  "Diego Romero",
  "Marta Guillén",
  "Javier Ortega",
  "Clara Vázquez"
];

app.get('/alumnos', (req, res) => {
  const alumnosUnicos = [...new Set(alumnos)];
  res.json({
    totalAlumnos: alumnosUnicos.length,
    nombresAlumnos: alumnosUnicos
  });
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Alumnos');
});

app.listen(port, () => {
  console.log(`API funcionando en http://localhost:${port}`);
});
