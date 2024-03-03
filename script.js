alert("Ticketing");

const nama = prompt("Masukkan nama");
const umur = prompt("Masukkan umur");

if (umur < 13) {
    alert(`${nama} tidak diizinkan masuk ke dalam studio.`);
} else {
    const pilihanStudio = prompt("Pilih studio (A, B, atau C):");

    if (pilihanStudio === "A" || pilihanStudio === "B" || pilihanStudio === "C") {
        alert(`${nama} diizinkan masuk ke dalam studio ${pilihanStudio}.`);
    } else {
        alert(`Pilihan studio tidak valid.`);
    }
}
