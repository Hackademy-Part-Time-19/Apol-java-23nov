let listaSpesa=[
    'Pane', 'Latte', 
]


while (true) {
    
    let scelta= parseInt(prompt("Fai click sul sequente tasto:\n\n1.Aggiungi un prodotto alla lista\n\n2.Elimina un elemento dalla lista\n\n3.Ordina la lista in ordine alfabetico\n\n4.Modifica un elemento della lista\n\n5.Elimina l’intera lista\n\n6.Visualiza lista "))



switch (scelta) {
    
    case 1:
     
        break;

   
     

        case 2:
       eliminaProdotto(listaSpesa)
    
        

        break; 
        
      
    
    

        case 3: 
        ordinaLista(listaSpesa) 
    
            
            
        break;

 
       

        case 4:
        
        break;

    
      

        case 5:
            let deleted = delete listaSpesa[0]
            alert("Lista spesa Cancellata!")
        break;

    
      

        case 6:
       visualizaLista(listaSpesa)
            
               
        
        break;

    default:
        alert("Operazione annulata")
        break;
       
}



}
function visualizaLista(){
    let index=0
    if (index<listaSpesa.length) {
        alert("La lista della spesa\n\n"+ listaSpesa)   
    }  
    else {
        alert("Nessun prodotto nella lista")
       
    }
}



function eliminaProdotto() {
    let keri1=0
    if (keri1<listaSpesa.length) {
        let prodotto = prompt("Qualle prodotto vuoi eliminare? " +listaSpesa);
    let index = listaSpesa.indexOf(prodotto);
    if (index !== -1) {
        listaSpesa.splice(index, 1);
        alert(prodotto+" eliminato dalla lista.");
    } else 
        alert("Operazione annulata");
    } else {
        alert("Non ce niente da rimuovere")
    }
}




    function ordinaLista() {
        var iul=0
        if (iul<listaSpesa.length) {
            let listaSpesaOrdinata= listaSpesa.sort() 
            alert(listaSpesaOrdinata);
        } else {
            alert("Non ce niente da ordinare")
        }
    }