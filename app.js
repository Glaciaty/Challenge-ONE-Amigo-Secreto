let arrayAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo');

    if (arrayAmigos.includes(nomeAmigo.value)){
        alert('Diferencie o nome de seus amigos para evitar dúvidas');
        nomeAmigo.value = '';
        return;
    }

    if (nomeAmigo.value.trim() == ''){
        alert("Digite um nome");
        return;
    } else {
        arrayAmigos.push(nomeAmigo.value);
    }
    nomeAmigo.value = '';
    atualizarListaAmigos(arrayAmigos);
}

function atualizarListaAmigos(arrayAmigos) {
    document.getElementById('listaAmigos').innerHTML = arrayAmigos.map(nomeAmigo => `<li>${nomeAmigo}</li>`).join('');
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * arrayAmigos.length);
}

function sortearAmigo(){
    let numero = gerarNumeroAleatorio();
    let sorteado = document.getElementById('resultado');
    if (arrayAmigos == ''){
        alert('Adicione os nomes de seus amigos para realizar o sorteio');
        return;
    }
    
    sorteado.value = arrayAmigos[numero];
    sorteado.innerHTML = `O seu amigo secreto é: ${sorteado.value} `;

    document.getElementById('listaAmigos').innerHTML = '';
    arrayAmigos = [];
}