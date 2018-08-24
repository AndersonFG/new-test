function analisaInput() {
					// obtendo valores de input
					var nomeConta = formulario.nome.value;
					var maturity = formulario.maturity.value;
					var accountValue = formulario.accountValue.value;
					
					// analiza parametros para semarar dia mês ano
					var ver = maturity.split("-");
					var year = new Date();

					// calcula a idade
					var calc = year.getFullYear() - ver[2];

					if(nomeConta.length < 3 ) {
						alert("It has to be a valid name.");
						formulario.nome.focus();
						return false;
					}
					// if(isNaN(nomeConta) == true || nomeConta === "" ) {
					// 	alert("Must be a numeric value")
					// 	formulario.nome.focus();
					// 	return false;
					// }
					
					if(maturity==="" || ver[0] > 31 || ver[0] == "0" || ver[1] > 12 || ver[1] == "0" || calc > 80 ) {
						alert("tem que colocar data valido");
						formulario.maturity.focus();
						return false;

					}
				
					// if( ver[0] > 31 || ver[0] == "0"  ) {
					// 	alert("Not valid day");
					// 	formulario.maturity.focus();
					// 	return false;
					// }
					// if( ver[1] > 12 || ver[1] == "0") {
					// 	alert("Not valid month");
					// 	formulario.maturity.focus();
					// 	return false;
					// }
					// if( calc > 80 ) {
					// 	alert("You are under 80 years old!");
					// 	formulario.maturity.focus();
					// 	return false;
					// }
					if( isNaN(accountValue) == true || accountValue < 1 ) {
						alert("enter a valid value");
						formulario.accountValue.focus();
						return false;
					}
				}
				 document.getElementById("btn").addEventListener("click", function(event){
				 	event.preventDefault()
				 });				

