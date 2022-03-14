// class: key:value (var)
// luu y: khi khai bao mot doi tuong vd sinh vien thi chu cai dau cua doi tuong phai viethoa : SinhVien
function SinhVien(
  _maSv,
  _tenSV,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _toan,
  _ly,
  _hoa
) {
  //this.key = value;
  (this.maSV = _maSv),
    (this.tenSV = _tenSV),
    (this.email = _email),
    (this.matKhau = _matKhau),
    (this.ngaySinh = _ngaySinh),
    (this.khoaHoc = _khoaHoc),
    (this.toan = _toan),
    (this.ly = _ly),
    (this.hoa = _hoa),
    (this.DTB = 0),
    (this.tinhDiemTrungBinh = function () {
      this.DTB =
        (parseFloat(this.toan) + parseFloat(this.ly) + parseFloat(this.hoa)) /
        3;
      return this.DTB;
    });
}
