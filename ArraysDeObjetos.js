var articulos =[
    { nombre: "bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 500},
    { nombre: "Laptop", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];



var articulosFiltrados=articulos.filter(function(articulo){
    return articulo.costo <=500

});

console.log(articulosFiltrados)

var nombreArticulos=articulos.map(function(articulo){
    return articulo.nombre
})
console.log(nombreArticulos)