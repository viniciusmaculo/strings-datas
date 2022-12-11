// 1
function inverterString() {

    let texto = document.getElementById('txt1').value
    let res1 = document.getElementById('res1')
    
    let o = '';

    for (let i = texto.length - 1; i >= 0; i--) {
        o += texto[i];
    }

    res1.innerHTML = `${o}`;
}

// 2
function negrito() {
    
    let texto = document.getElementById('txt2').value
    let res2 = document.getElementById('res2')
   
    let o = '';

    for (let i = 0; i != texto.length; i++) {
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || 
            texto[i] == 'u' || texto[i] == 'A' || texto[i] == 'E' || texto[i] == 'I' || 
            texto[i] == 'O' || texto[i] == 'U') {
            o += texto[i].bold();
        } else {
            o += texto[i];
        }
        
    }

    res2.innerHTML = `${o}`
}

//3
function separarTexto() {

    let texto = document.getElementById('txt3').value
    let res3 = document.getElementById('res3')

    let armazena = [];

    const Array = texto.split(' ');

    Array.map(function(element){
        let verifica = false

        for(i=0;i<=armazena.length;i++) {
            if(armazena[i]?.palavra == element){
                armazena[i].contador+=1
                verifica = true
            } 
            
        }
        
        if(!verifica == true) {
            let mostra = { palavra: element, contador: 1 }
            armazena.push(mostra)
        }
    })
    res3.innerHTML = `${JSON.stringify(armazena)}`
}

//4
function localiza() {

    let texto = document.getElementById('txt4').value
    let res4 = document.getElementById('res4')
    let novoTexto
    
    let palavra = document.getElementById('txt4-palavra').value
    console.log(palavra)
    novoTexto = texto.replace(palavra, "<b>"+palavra+"</b>")

    res4.innerHTML = texto
}

function substitui() {

    let texto = document.getElementById('txt4').value
    let res4 = document.getElementById('res4')
    let novoTexto
    
    let palavra = document.getElementById('txt4-palavra').value
    let novaPalavra = document.getElementById('txt4-novaPalavra').value


    novoTexto = texto.replace(palavra, novaPalavra)

    res4.innerHTML = novoTexto
}

//5

function maiorOcorrencia(){

    let texto = document.getElementById('txt5').value
    let res5 = document.getElementById('res5')
    
    let cont = {}, result, aux
    texto.match(/\w+/g).forEach(function(i){ cont[i]=(cont[i]||0)+1 })
    for (let i in cont) {
    if (!(cont[i]<aux)) {
        aux = cont[i]
        result = i
    }
    }
    res5.innerHTML = `"${result}" é a palavra com maior ocorrência no texto.` 
}

//6
function diasVividos() {

    let texto = document.getElementById('txt6').value
    let res6 = document.getElementById('res6')

    let dia = texto.split("/")[0]
    let mes = texto.split("/")[1]
    let ano = texto.split("/")[2]
    let data = new Date()

    var dia_atual = parseInt(data.getDate())
    var mes_atual = parseInt(data.getMonth()) + 1
    var ano_atual = parseInt(data.getFullYear())


   let vividos = (ano_atual - ano) * 365.25 + ((mes_atual - mes) * 30) + (dia_atual - 16)

   res6.innerHTML = `${vividos}`

}

//7
function dataExtenso() {

    let texto = document.getElementById('txt7').value
    let res7 = document.getElementById('res7')

    let dia = texto.split("/")[0]
    let mes = texto.split("/")[1]
    let ano = texto.split("/")[2]

    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro','dezembro']

    let extenso = dia + ' de ' + meses[mes-1] + ' de ' + ano

    res7.innerHTML = `${extenso}`

}

//8
function distanciaSemanas() {

    let texto = document.getElementById('txt8').value
    let res8 = document.getElementById('res8')

    let dia = texto.split("/")[0]
    let mes = texto.split("/")[1]
    let ano = texto.split("/")[2]

    let texto2 = document.getElementById('txt8.1').value

    let dia2 = texto2.split("/")[0]
    let mes2 = texto2.split("/")[1]
    let ano2 = texto2.split("/")[2]

    let distanciaSemanas = parseInt(((ano2 - ano) * 365 + ((mes2 - mes) * 30) + (dia2 - dia)) / 7)

    if(distanciaSemanas < 0) { //Mantém o resultado positivo
        distanciaSemanas = distanciaSemanas * -1
    }

    res8.innerHTML = `Distância em semanas: ${distanciaSemanas}`

}

//9

function classificarTexto() {
    let texto = document.getElementById('txt9').value
    let res9 = document.getElementById('res9')

    let result
    let regex1 = /^[a-zA-Z ._-]*$/
    let regex2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/
    let regex3 = /\W|_/
    
    if(regex1.test(texto)) {
        res9.innerHTML = `Fraca`
        document.getElementById('res9').style.color = 'red'
    }
    
    if(regex2.test(texto)) {
        res9.innerHTML = `Moderada`
        document.getElementById('res9').style.color = '#F7D917'
    }

    if(regex3.test(texto) && regex2.test(texto)) {
        res9.innerHTML = `Forte`
        document.getElementById('res9').style.color = 'green'
    }

}


//10
function codifica() {

    let novoTexto;
    let texto = document.getElementById('txt10').value
    let res10 = document.getElementById('res10')
    
    novoTexto = texto.replaceAll('t', 'p').replaceAll('p','t').replaceAll('e', 'o').replaceAll('n', 'l').replaceAll('i', 'a').replaceAll('s', 'r')

    res10.innerHTML = novoTexto
}