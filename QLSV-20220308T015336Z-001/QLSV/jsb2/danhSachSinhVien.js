function DanhSachSV() {
  this.list = [];
  this.themSinhVien = function (sv) {
    this.list.push(sv);
  };
  this.timViTri = function (maSV) {
    // Tim ma sv muon xoa thong qua array ten list
    // 0: var idex = -1;
    // 1:duyen LockManager;
    // 2: neu ma nhap vao === ma trong this.list
    // 3:splice

    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV === maSV) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaSinhVien = function (maSV) {
    //lay vi tri
    var index = this.timViTri(maSV);
    if (index !== -1) {
      return this.list.splice(index, 1);
    }
  };
  this.layThongTinSinhVien = function (maSV) {
    var index = this.timViTri(maSV);
    if (index !== -1) {
      return this.list[index];
    }
  };
  this.capNhatSinhVien = function (sinhVien) {
    //lay vi tri
    var index = this.timViTri(sinhVien.maSV);
    if (index !== -1) {
      this.list[index] = sinhVien;
    }
  };
}
//prototype: giup chung ta khai bao phuong thuc ben ngoai doi tuong
DanhSachSV.prototype.timKiemSinhVien = function (key) {
  /* 1. tao mang tim kiem
  2. duyet mang
  3. neu nhu key trung voi sinhVien.tenSV => tim thay va sinh vien duoc tim thay cho vao mang
  4. tra ket qua tim kiem
  */
  var mangTimKiem = [];
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].tenSV.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      mangTimKiem.push(this.list[i]);
    }
  }
  return mangTimKiem;
};
