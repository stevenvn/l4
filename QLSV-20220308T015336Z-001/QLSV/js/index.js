function getEle(id) {
  return document.getElementById(id);
}
function hienThiThongTin() {
  var _maSv = getEle("txtMaSV").value;
  var _tenSv = getEle("txtTenSV").value;
  var _loaiSv = getEle("loaiSV").value;
  var _toan = getEle("txtDiemToan").value;
  var _van = getEle("txtDiemVan").value;

  var sinhVien = {
    maSv: _maSv,
    tenSv: _tenSv,
    loaiSv: _loaiSv,
    toanSv: _toan,
    vanSv: _van,

    tinhDTB: function () {
      var dtb = (parseFloat(this.toanSv) + parseFloat(this.vanSv)) / 2;
      return dtb;
    },

    xepLoai: function (dtb) {
      if (dtb > 8) {
        return "gioi";
      } else if (dtb < 8 && dtb > 5) {
        return "kha";
      }
    },
  };
  getEle("spanTenSV").innerHTML = sinhVien.tenSv;
  getEle("spanMaSV").innerHTML = sinhVien.maSv;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSv;
  getEle("spanDTB").innerHTML = sinhVien.tinhDTB();
  getEle("spanXepLoai").innerHTML = sinhVien.xepLoai(sinhVien.tinhDTB());
}
