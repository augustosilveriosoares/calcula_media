const form = document.getElementById('formulario');
var linha = '';
form.addEventListener('submit',function(e){
    e.preventDefault();

    var telefone =  document.getElementById('telefone');
    var nome  = document.getElementById('nome');
    

    linha += '<tr><td>'+nome.value+'</td><td>'+telefone.value+'</td></tr>';
    document.querySelector('tbody').innerHTML = linha;

    telefone.value='';
    nome.value='';

});

