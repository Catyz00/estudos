var idade = 22
console.log(`Voce tem ${idade} anos e é`)
if (idade < 16){
    console.log("não vota")
}else if (idade < 18 || idade > 65){
    console.log("voto opcional")
}else if (idade >= 18){
    console.log("voto obrigatorio")
}