let listaAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo');

    if (listaAmigos.includes(nomeAmigo.value)){
        alert('Diferencie o nome de seus amigos para evitar dúvidas');
        nomeAmigo.value = '';
        return;
    }

    if (nomeAmigo.value.trim() == ''){
        alert("Digite um nome");
        return;
    } else {
        listaAmigos.push(nomeAmigo.value);
    }
    
    nomeAmigo.value = '';
    

}