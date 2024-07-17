const btns = document.querySelectorAll('.calculadora button')
const resultado = document.getElementById('result')
//a calculadora está meio porquinha porque foi realizada de modo simples, e como o resultado está em input e não em div, não ta dando para usar os metodos, como contains ou startswith

btns.forEach((btn) => { //eval
    btn.addEventListener('click', (e) => {
        const botao = e.target.innerText
        const multiplicacao = '*'
        if(botao >= 0 && botao <= 9){
            resultado.value += botao
        } else{ 
            if(botao == '.' && resultado.value.includes('.')){
                return;
            }
            switch(botao){ //possivel if mais limpo
                case 'C':
                    resultado.value = ''
                    break;
                case '/':
                    resultado.value += botao
                    break;
                case '-':
                    resultado.value += botao
                    break;
                case '+':
                    resultado.value += botao
                    break;
                case '=':
                    let resultadoFinal;
                    resultadoFinal = eval(resultado.value)
                    // resultado.value = ''
                    resultado.value = resultadoFinal

                    break;
                case '.':
                    resultado.value += botao
                    break;
            }
            if(botao == 'x'){
                resultado.value += multiplicacao
            }
        }
        

    })
})


