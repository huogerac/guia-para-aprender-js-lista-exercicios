/**
 * Faça um programa que dado um texto de entrada, imprima o texto
 * criptografado. A criptografia inicial é bem simples,
 * apenas converta a para b, b para c e assim por diante. 
 * 
 * ENTRADA          SAÍDA
 * abacate          bcbdbuf
 * zebra            @fcsb
 * Zebra            $fcsb
 * 
 * DICAS:
 * É uma variante do exercício js06
 * Pesquise a tabela ASCII, ai vamos ver que a = 97, que A = 65
 * (cada caracter no teclado tem uma representação numérica)
 * Pesquise os métodos de String fromCharCode que converte a para 97
 * e charCodeAt que faz 97 voltar para a
 * Assim, no podemos usar um método bem simples de criptografia que seria mudar
 * o código ASCII de forma a incrementar 1, ou seja, mudar de a para b, b para c 
 * e assim por diante!
 * quando for z ou Z mudar para @ e $ respectivamente ao invés de {
 * 
 * Tarefa
 * - entenda como converter a para 97
 * - percorra o abacate para gerar os ordinais correspondente: 97,  98, 97 ...
 * - percorra a lista dos inteiros corresponde somando 1       98, 100, 98 ...
 * - percorra novamente, agora voltando para caractere          b,   c, b  ...
 *
 * IMPORTANTE:
 * - Não usar bibliotecas, basta manipular a string de entrada de forma a embaralhá-la
 */

// Entrada
var texto = 'abacate'

// implemente aqui uma lógica para criptografar o texto

var textoCripto = 'bcbdbuf'

console.log(textoCripto)
