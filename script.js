// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values(...rest) {
  //pedemos mudar a nomenclaturatambém se quisermos. "args" é muito comum de se usar.
  //console.log(a);

  console.log(rest.length); //exemplo
  console.log(...rest);
  //o rest retorna um array, se tirar os tres pontos do console.log(...rest) dá pra entender.
  console.log(rest);
}
values(2, 1, 3, 4, 5);

//finalizando
