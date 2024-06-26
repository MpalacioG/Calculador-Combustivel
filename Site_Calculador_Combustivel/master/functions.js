function Calcular(event){
    event.preventDefault();

    let Alcoolinput = document.getElementById('alcoolId').value;
    let Gasolinainput = document.getElementById('gasolinaId').value;
    let contentResult = document.getElementById('content-result');
    let textResult = document.getElementById('text-result');

    let gasolinaSpan = document.getElementById('gasolina-result');
    let alcoolSpan = document.getElementById('alcool-result');

    let SomaCombustivel = (Alcoolinput / Gasolinainput);

    // return Math.round(SomaCombustivel);

    // alert(SomaCombustivel)
    if(SomaCombustivel < 0.7) {
        // alert("Compensa usar o Álcool")
        textResult.innerHTML = "Compensa usar o Álcool";
    }else{
        // alert("Compensa usar Gasolina")
        textResult.innerHTML = "Compensa usar a Gasolina";
    }

    gasolinaSpan.innerHTML = "Gasolina está R$ " + Gasolinainput;
    alcoolSpan.innerHTML = "Álcool está R$ " + Alcoolinput;

    contentResult.classList.remove("hide");

}
