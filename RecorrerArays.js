var articulos =[
    { nombre: "bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 500},
    { nombre: "Laptop", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"

})

console.log(encuentraArticulos)


var nombresArticulos=articulos.forEach(function(articulo){
    return articulo.nombre


});

console.log(nombresArticulos);


var articulosBaratos=articulos.some(function(articulo){
    return articulo.costo <=800;

});

console.log(articulosBaratos);