function hasil() {
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var harga;
  var total = jumlah * harga;
  document.getElementById("total").innerHTML = total;
  var Nama = document.getElementById("Nama").value;
  var Status = document.getElementById("Status").value;
  var dis;
  var bayar;

  if (Nama == "Monitor") {
    harga = 500000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  } else if (Nama == "Keyboard") {
    harga = 150000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  } else {
    harga = 100000;
    total = jumlah * harga;
    document.getElementById("harga").innerHTML = harga;
    document.getElementById("total").innerHTML = total;
  }

  if (Status == "Pelanggan") {
    dis = 0.1 * total;
    bayar = total - dis;
    document.getElementById("dis").innerHTML = dis;
    document.getElementById("bayar").innerHTML = bayar;
    alert("Pelanggan mendapat diskon 10%");
  } else {
    dis = 0 * total;
    bayar = total - dis;
    document.getElementById("dis").innerHTML = dis;
    document.getElementById("bayar").innerHTML = bayar;
    alert("Selain pelanggan, yang lain tidak mendapat diskon 10%");
  }
}

function hapus() {
  document.getElementById("jumlah").innerHTML = "";
  document.getElementById("harga").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("dis").innerHTML = "";
  document.getElementById("bayar").innerHTML = "";
  alert("Data sudah direset, Silahkan pencet tombol reload");
}
