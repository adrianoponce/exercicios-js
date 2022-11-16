function Converter(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    
    //converte em centímetros
    let total = parseFloat(valor1) * 100
    document.getElementById('resposta').innerHTML = total + " centímetros"
}