
let listaSpesa = ["Pane", "Latte"];

while (listaSpesa !=0) {
  let scelta = parseInt(
    prompt(
      "Inserisci il numero per:\n\n1. Aggiungi un prodotto alla lista\n\n2. Elimina un elemento dalla lista\n\n3. Ordina la lista in ordine alfabetico\n\n4. Modifica un elemento della lista\n\n5. Elimina l’intera lista\n\n6. Visualiza lista\n\n7. Esci dal programa "
    )
  );

  switch (scelta) {
    case 1:
      aggiungiProdotto();

      break;

    case 2:
      eliminaProdotto();

      break;

    case 3:
      ordinaLista();

      break;

    case 4:
      modificaProdotto();

      break;

    case 5:
      eliminaLista();

      break;

    case 6:
      visualizaLista();

      break;

      case 7:
       esci()
  
        break;

    default:
      
      alert("Operazione annulata");
      break;
  }
}

function visualizaLista() {
  let index = 0;
  if (index < listaSpesa.length) {
    alert("La lista della spesa\n\n" + listaSpesa);
  } else {
    alert("Nessun prodotto nella lista");
  }
}

function eliminaProdotto() {
  let i = 0;
  if (i < listaSpesa.length) {
    let prodotto = prompt("Qualle prodotto vuoi eliminare? " + listaSpesa);
    let index = listaSpesa.indexOf(prodotto);
    if (index !== -1) {
      listaSpesa.splice(index, 1);
      alert(prodotto + " eliminato dalla lista.");
    } else alert("Operazione annulata");
  } else {
    alert("Non ce niente da rimuovere");
  }
}

function ordinaLista() {
  let i = 0;
  if (i < listaSpesa.length) {
    let listaSpesaOrdinata = listaSpesa.sort();
    alert(listaSpesaOrdinata);
  } else {
    alert("Non ce niente da ordinare");
  }
}

function aggiungiProdotto() {
  let prodottoAggiunto = prompt("Cosa vuoi aggiungere alla lista?");
  listaSpesa.push(prodottoAggiunto);
  alert(prodottoAggiunto + " aggiunto nella lista");
}

function modificaProdotto() {
  let i = 0;
  if (i < 1) {
    let ka = prompt("Scegli cosa vuoi cambiare dalla lista: " + listaSpesa);
    let kal = prompt("Stai cambiano il "+ka+" con:");
    listaSpesa[
      listaSpesa.map((x, i) => [i, x]).filter((x) => x[1] == ka)[0][0]
    ] = kal;
  } else {
  }
}

function eliminaLista() {
  listaSpesa = [];
  alert("Lista eliminata!");
}

function esci() {
  listaSpesa=listaSpesa==0
}




