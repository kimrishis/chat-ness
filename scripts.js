let msg = []

function chatbuba() {
    const fale = document.getElementById("fale").value
    httpRequest = new XMLHttpRequest();

                const resultado = document.getElementById("resultado")
                resultado.style = `display: block`
    //o que foi falado
    let txt = `
        <section class="message -left">
        <i class="nes-bcrikko"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left">
            <p>${fale}</p>
        </div>
        </section>
    ` 
    msg.push(txt)

    //o que vai responder
    let resposta = `
        <section class="message -right">
        <!-- Balloon -->
        <div class="nes-balloon from-right">
        <p>não sei ainda</p>
        </div>
        <i class="nes-bulbasaur"></i>
    </section>
    </section>
    </section>
    `
    msg.push(resposta)

    //final mostrando
                  resultado.innerHTML = msg.join("")
             return false;
}
                   
                    
                    

