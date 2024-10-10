let isCelsiusToFahrenheit = true; // Inisialisasi variabel toggle untuk menentukan arah konversi

// Fungsi untuk melakukan konversi suhu
function tombolKonversi() {
    let input = parseFloat(document.getElementById("input").value); // Mengambil nilai input dan mengubahnya menjadi angka
    if (isNaN(input)) {
        alert("Silakan masukkan angka yang valid."); // Peringatan jika input bukan angka
        return;
    }

    let hasil; // Variabel untuk menyimpan hasil konversi
    if (isCelsiusToFahrenheit) {
        hasil = input * (9 / 5) + 32; // Konversi dari Celsius ke Fahrenheit
    } else {
        hasil = (input - 32) * (5 / 9); // Konversi dari Fahrenheit ke Celsius
    }

    document.getElementById("hasil1").value = hasil.toFixed(2); // Menampilkan hasil konversi dengan 2 desimal
    document.getElementById("hasil2").value = isCelsiusToFahrenheit
        ? `${input} °C * (9/5) + 32 = ${hasil.toFixed(2)} °F` // Menampilkan langkah konversi
        : `${input} °F - 32 * (5/9) = ${hasil.toFixed(2)} °C`;
}

// Fungsi untuk mereset semua input dan output
function tombolReset() {
    document.getElementById("input").value = ""; // Mengosongkan input suhu
    document.getElementById("hasil1").value = ""; // Mengosongkan hasil konversi
    document.getElementById("hasil2").value = ""; // Mengosongkan langkah kalkulasi
}

// Fungsi untuk membalik arah konversi
function tombolReverse() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit; // Mengubah arah konversi
    const input1 = document.getElementById("input");
    const input2 = document.getElementById("hasil1");
    const label1 = document.querySelector("label[for='input']");
    const label2 = document.querySelector("label[for='hasil1']");
    const instruction = document.getElementById("artikel");

    // Tukar nilai input
    [input1.value, input2.value] = [input2.value, input1.value];

    // Mengubah label dan instruksi sesuai arah konversi
    if (isCelsiusToFahrenheit) {
        label1.textContent = "Celsius (°C) :";
        label2.textContent = "Fahrenheit (°F) :";
        instruction.textContent =
            "Masukkan suhu derajat Celsius (°C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).";
    } else {
        label1.textContent = "Fahrenheit (°F) :";
        label2.textContent = "Celsius (°C) :";
        instruction.textContent =
            "Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (°C).";
    }

    // Menghapus kalkulasi sebelumnya
    document.getElementById("hasil2").value = "";

    // Melakukan konversi jika ada input
    if (input1.value) {
        tombolKonversi(); // Memanggil fungsi konversi untuk menghitung hasil baru
    }
}
