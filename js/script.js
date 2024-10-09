function tombolKonversi() {
    let input = parseFloat(document.getElementById("input").value);
    if (isNaN(input)) {
        alert("Silakan masukkan angka yang valid.");
        return;
    }
    let hasil = input * (9 / 5) + 32;
    document.getElementById("hasil1").value = hasil.toFixed(2);
    document.getElementById("hasil2").value = `${input} °C * (9/5) + 32 = ${hasil.toFixed(2)} °F`;
}

function tombolReset() {
    document.getElementById("input").value = "";
    document.getElementById("hasil1").value = "";
    document.getElementById("hasil2").value = "";

    if (isNaN(input)) {
        alert("Form sudah direset. Silahkan masukkan angka yang valid.");
        return;
    }
}

function tombolReverse() {
    let input = parseFloat(document.getElementById("hasil1").value);
    if (isNaN(input)) {
        alert("Silakan masukkan angka yang valid dan konversi terlebih dahulu.");
        return;
    }
    let hasil = (input - 32) * (5 / 9);
    document.getElementById("input").value = hasil.toFixed(2);
    document.getElementById("hasil2").value = `(${input} °F - 32) * (5/9) = ${hasil.toFixed(2)} °C`;
}
