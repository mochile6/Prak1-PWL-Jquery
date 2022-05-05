$(document).ready(function () {
  // set database
  var produkquantity = [
    {
      namaproduk: "Jet Tempur",
      jumlah: 10,
    },
    {
      namaproduk: "Nuklir Hiroshima",
      jumlah: 2,
    },
    {
      namaproduk: "Infinity Stone",
      jumlah: 5,
    },
    {
      namaproduk: "Burj Khalifa",
      jumlah: 5,
    },
    {
      namaproduk: "Rudal Hipersonik",
      jumlah: 10,
    },
  ];
  var produk = [
    "Jet Tempur",
    "Nuklir Hiroshima",
    "Infinity Stone",
    "Burj Khalifa",
    "Rudal Hipersonik",
  ];

  //hide produk name when its not selected
  var n = 1;
  $("#add-button").hide();
  $("#produk-" + n).change(function () {
    $("#add-button").show();
  });

  //show product when pesan produk clicked
  let pesanan = "";
  $("#add-pesanan").click(function () {
    for (let i = 1; i <= n; i++) {
      let jumlah_idx = produkquantity.findIndex(
        (data) => data.namaproduk === $("#produk-" + i).val()
      );
      if ($("#jumlah-" + i).val() <= produkquantity[jumlah_idx].jumlah) {
        //mengurangi jumlah stok
        produkquantity[jumlah_idx].jumlah -= $("#jumlah-" + i).val();
        //output message
        pesanan +=
          "<ol>" +
          $("#produk-" + i).val() +
          " (" +
          $("#jumlah-" + i).val() +
          ")</ol>";
        $("#list-produk").html(`${pesanan}`);
      } else {
        alert(
          `Produk ${produkquantity[jumlah_idx].namaproduk}. Jumlah Stok ${produkquantity[jumlah_idx].jumlah}`
        );
      }
    }
    //show name of pemesan
    let nama = $("#nama").html(`${$("#nama-pembeli").val()}`);
    $("#nama").show() = nama;
  });

  //menambahkan produk
  $("#add-button").click(function () {
    let jumlah_idx = produkquantity.findIndex(
      (data) => data.namaproduk === $("#produk-" + n).val()
    );
    n += 1;
    let pesanan = `<div class="clearfix cont-2"><div class="left" id="id-${n}"><label for="produk-${n}">Produk</label><br><select id="produk-${n}" required><option value="" hidden selected>Pilih produk</option>`;
    //mapping produk ke select
    produk.map((data) => {
      pesanan += `<option value="${data}">${data}</option>`;
    });
    // create input jumlah
    pesanan += `</select><br></div><div class="left cont-3"><label for="jumlah-${n}" style="padding-left: 5px;">Jumlah</label><br><input type="nber" id="jumlah-${n}" class="jumlah" required><br></div>`;
    //create button hapus
    pesanan += `<div id='button-delete' class="left pd-top"><button id="btn-hapus-${n}" class="btn-hapus"><div>Hapus</div></button></div>`;
    $(this).before(pesanan);

    $("#btn-hapus-" + n).click(function () {
      $("#id-" + n).nextAll();
      $(this).parent().parent().remove();
      $("#id-" + n).closest("div");
      $(this).parent().parent().remove();
    });
  });
});
