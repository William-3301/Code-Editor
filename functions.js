function atualizar(){
    var textContent = document.getElementById('editor-textarea').value
    document.getElementById('viewer').srcdoc= textContent
}

function apagar(){
    document.getElementById('editor-textarea').value="";
    document.getElementById('viewer').srcdoc= "";
    
}


