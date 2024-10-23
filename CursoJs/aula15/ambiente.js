let num = [9, 8, 7, 6, 5]
num[5] = 4
num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('O valor nao foi encontrado')
}else{
    console.log(`O valor 8 esta na posicao ${pos}`)
}
