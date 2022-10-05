let escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
  evento.preventDefault();

  let incremento = document.getElementById("valorIncremento");

  if (evento.target.value == "cCesar") {
    incremento.style = "display: flex";
  } else {
    incremento.style = "display: none";
  }
});

let btn = document.querySelectorAll('input[name="codific"]');

btn.forEach((radio) => {
  radio.addEventListener("change", function (evento) {
    evento.preventDefault();

    let botao = document.getElementById("submit");

    if (evento.target.value == "decodificar") {
      botao.innerHTML = "Decodificar mensagem";
      document.querySelector("html").style.filter = "hue-rotate(175deg)";
    } else {
      botao.innerHTML = "Codificar mensagem";
      document.querySelector("html").style.filter = "hue-rotate(300deg)";
    }
  });
});

let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let texto = formulario.texto.value;
  let escolha = formulario.escolherCod.value;
  let botoes = formulario.codific.value;
  let numeroIncremento = formulario.numeroIncrementos.value;
  let mensagemFinal = "";

  if (escolha == "cCesar") {
    mensagemFinal = cesar(botoes, texto, numeroIncremento);
  } else {
    mensagemFinal = base64(botoes, texto);
  }

  let resultadoTexto = document.getElementById("saidaTexto");
  resultadoTexto.innerHTML = `${mensagemFinal}`;
});

function cesar(codific, texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);

  let mensagemFinal = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    let codigo = letra.charCodeAt();

    if (codific == "codificar") {
      codigo += numeroIncremento;
    } else {
      codigo -= numeroIncremento;
    }
    mensagemFinal += String.fromCharCode(codigo);
  }
  return mensagemFinal;
}

function base64(codific, texto) {
  if (codific == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}
