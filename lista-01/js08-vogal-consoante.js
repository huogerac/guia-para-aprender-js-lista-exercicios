/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'A'
let vogais = ['a', 'e', 'i', 'o', 'u']
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (vogais.indexOf(entrada.toLowerCase()) !== -1) {
    console.log('Vogal')
} else {
    console.log('Consoante')
}
