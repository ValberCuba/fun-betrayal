

function calcular() { // definir qual nivel de gado

    var txtgado = window.document.querySelector('input#txtcorn')
    var res = window.document.querySelector('div#res')
    var corn = Number(txtgado.value)
    


    res.innerHTML= `<p>Sapecaram o corpinho do seu amor <strong>${corn} veze(s) !</strong></p>` 

    if (corn==0) {

      res.innerHTML += ` <p> <strong> Não minta! ninguem é idiota aqui, alias exceto voce </strong>  </p>`
      

      
    }
   
    if(corn>=1 && corn<=2) {
    res.innerHTML += "<img class='image' src='gadinho.png'><br> O que os olhos não veem o coroção e o chifre não sentem"; 
    
   } // MENOR OU IGUAL A 2 OK    não mude nada seu otario ( novo )checkpoint

  if (corn>=3 && corn<=5) { // quem fez foi a vic minha esposa
    res.innerHTML += "<img class= 'image' src= 'gadomedio.png'><br> <p>Você é um <strong>GADÃO MÉDIO</strong></p>"
    

  }
  if (corn>=6) {
    res.innerHTML += "<img class 'image' src= 'gadoguerreiro.png'<br> <p> Você é <strong>GADÃO GUERREIRO</strong> </p> "
    
    res.innerHTML += ` <p><strong>Juvenil de mais, logo menos estará calvo e broxa</strong></p>.`

  }
  



   


    
} 


   
    
