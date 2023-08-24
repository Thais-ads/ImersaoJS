const url = "asdasda";

function sendMessage() {
    var message = document.getElementById("message-input");

    // validação verdadeiro ou false com o valor de dentro do input
    if (!message.value) {
        message.style.border = '1px solid red'

        return
    }

    message.style.border = 'none'


    var status = document.getElementById('status');
    var botao = document.getElementById('btn-submit')
    status.innerHTML = 'carregando...'


    //desabilitando cursor, botão 
    botao.disable = true
    botao.style.cursor = 'not-allowed'
    message.disable = true


    //Endpoint


    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
           
        },

        body:JSON.stringify({

            model:"text-davinci-003",
            prompt: message.value,
            max_tokens:2048,
            temperature:0.5
        })
    })

    .then((response) => response.json())
    .then((response) =>{
        console.log(response)
    })
}