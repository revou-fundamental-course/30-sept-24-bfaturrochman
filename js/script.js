function tombolKonversi() {
    let input = document.getElementById("input").value;
    let hasil = input * (9 / 5) + 32;
    document.getElementById("hasil1").value = hasil;
    document.getElementById("hasil2").value = input, "°C * (9/5) + 32 = ", hasil;
}

function tombolReset() {
    document.getElementById("input").value = "";
    document.getElementById("hasil1").value = "";
    document.getElementById("hasil2").value = "";
}
// fahrenheitcelcius = () =>{
//         let input = document.getElementById('input').value;
//         let hasil = (input-32) / (9/5);
//         document.getElementById('hasil').value = hasil;
//     }