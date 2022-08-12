/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado 
 * 
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 * 
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = '$fcsb'

// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = []

for (i of texto){
    if (i == '@'){ 
        textoDecripto += 'z'}
    else if (i == '$'){
        textoDecripto += 'Z'}
    else{
    textoDecripto += String.fromCharCode(i.charCodeAt(i)-1)}
}


console.log(textoDecripto)
