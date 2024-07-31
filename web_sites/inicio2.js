
var modelo = null;
var tensor2d;

//Se carga el modelo de la red neuronal
(async () => {

    console.log("Se carga el modelo");
    modelo = await tf.loadLayersModel("../red_entrenada/model.json");
    console.log("Se cargoooo la red neuronal");

})();

const botom = document.getElementById("enviar")

botom.onclick = () =>{

    var saludg = document.getElementById("saludg").value;
    var chequeo = document.getElementById("chequeo").value;
    var ejercicio = document.getElementById("ejercicio").value;
    var cancerp = document.getElementById("cancerp").value;
    var cancer2 = document.getElementById("cancer2").value;
    var depresion = document.getElementById("depresion").value;
    var diabetes = document.getElementById("diabetes").value;
    var artritis = document.getElementById("artritis").value;
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;
    var peso = document.getElementById("peso").value;
    ///
    var imc = document.getElementById("imc").value;
    ///
    var altura = document.getElementById("altura").value;
    var tabaquismo = document.getElementById("tabaquismo").value;
    var Alcohol = document.getElementById("Alcohol").value;
    var frutas = document.getElementById("frutas").value;
    var vverdes = document.getElementById("vverdes").value;

    //alert(vverdes)

    botom.onclick = () => {
        const campos = [
            "saludg", "chequeo", "ejercicio", "cancerp", "cancer2", "depresion",
            "diabetes", "artritis", "sexo", "edad", "peso", "imc", "altura",
            "tabaquismo", "Alcohol", "frutas", "vverdes"
        ];
    
        for (let campo of campos) {
            if (!document.getElementById(campo).value) {
                document.getElementById("resultado").innerHTML = "Error en predicción: Todos los campos son obligatorios";
                return;
            }
        }

    if(modelo != null){

        var ten = tf.tensor2d([[parseInt(saludg), parseInt(chequeo), parseInt(ejercicio),
            parseInt(cancerp), parseInt(cancer2), parseInt(depresion), parseInt(diabetes), parseInt(artritis),
            parseInt(sexo), parseInt(edad), parseInt(imc), parseInt(peso), parseInt(altura), parseInt(tabaquismo),
            parseInt(Alcohol), parseInt(frutas), parseInt(vverdes)]])

        var predicc = modelo.predict(ten).dataSync();
        predicc = Math.round(predicc, 1)
        document.getElementById("resultado").innerHTML = "Su predicción es " + predicc
    }else{

        document.getElementById("resultado").innerHTML = "Error en predicción " 

    }

}
}