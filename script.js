alert("Selamat datang di Mini Project Aryandhi :)");
function hitungLuas() {
    var sisiLuas = document.getElementById('sisi-luas').value;
    var result;

    if (sisiLuas == ""){
        alert("Maaf anda belum mengisi nilai sisi");
    }
    else {
    result = parseFloat(sisiLuas) * parseFloat(sisiLuas);

    document.getElementById('rumusLuas').value = "L = S x S";
    document.getElementById('hitungLuas').value = "L = " + sisiLuas +" x "+ sisiLuas;
    document.getElementById('hasilLuas').value = "L = " + result;
    }
}

function hitungKeliling() {
    var sisiKeliling = document.getElementById('sisi-keliling').value;
    var result;

    if (sisiKeliling == ""){
        alert("Maaf anda belum mengisi nilai sisi");
    }
    else {
        result = 4 * parseFloat(sisiKeliling);

    document.getElementById('rumusKeliling').value = "K = 4 x S";
    document.getElementById('hitungKeliling').value = "K = " + 4 +" x "+ sisiKeliling;
    document.getElementById('hasilKeliling').value = "K = " + result;
    }
}

function clearLuas() {
    document.getElementById('rumusLuas').value = "";
    document.getElementById('hitungLuas').value = "";
    document.getElementById('hasilLuas').value = "";
}

function clearKeliling() {
    document.getElementById('rumusKeliling').value = "";
    document.getElementById('hitungKeliling').value = "";
    document.getElementById('hasilKeliling').value = "";
}

function resetLuas() {
        document.getElementById('sisi-luas').value = "";
        document.getElementById('rumusLuas').value = "";
        document.getElementById('hitungLuas').value = "";
        document.getElementById('hasilLuas').value = "";
}

function resetKeliling() {
        document.getElementById('sisi-keliling').value = "";
        document.getElementById('rumusKeliling').value = "";
        document.getElementById('hitungKeliling').value = "";
        document.getElementById('hasilKeliling').value = "";
}
