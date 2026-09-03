const botoes = document.querySelectorAll("button");

        botoes.forEach( function(botao){
            let curtiu = false;
            botao.addEventListener("click", botaoClicado);
            function botaoClicado(){
                console.log("fui clicado")
                let texto = botao.querySelector("span");
                if (curtiu === false){
                    texto.textContent++;
                    curtiu = true;
                } else{
                    texto.textContent--;
                    curtiu = false;

                }
            }
        })

        const bntTemaEscuro = document.querySelectorAll(".bnt-tema-escuro");
        bntTemaEscuro.addEventListener("click", mudatema);

        function mudatema(){
           const corpoPagina = document.body;
           if ( corpoPagina.classList.constains("tema-escuro")) {
            corpoPagina.classList.remove("tema-escuro");
        } else {
            corpoPagina.classList.add("tema-escuro");
        }

        }