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
    document.getElementById('listaAmigos').innerHTML = arrayAmigos
        .map(nomeAmigo => `<li>${nomeAmigo}</li>`).join('');
}

