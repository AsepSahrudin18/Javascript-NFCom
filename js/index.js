const hitung = (tombol) => {
  //tangkap id form
  let frm = document.getElementById("calcForm");
  let a1 = parseFloat(frm.angka1.value);
  let a2 = parseFloat(frm.angka2.value);

  //   let tombol2 = frm.tombolt.value;

  switch (tombol) {
    // pertambahan
    case "btn_tambah":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = a1 + a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    //   pengurangan
    case "btn_kurang":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = a1 - a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_kali":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = a1 * a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_bagi":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = a1 / a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_pangkat":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = Math.pow(a1, a2); //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    default:
      break;
  }
};
