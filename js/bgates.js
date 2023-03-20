function confirmacion() {
	var pregunta = confirm("Ir a wikipedia para conocer más sobre mi")
	if (pregunta){
		window.location = "https://es.wikipedia.org/wiki/Bill_Gates";
	}
	else{
		alert("Te lo pierdes...\n Saludos!!!")
	}
}

