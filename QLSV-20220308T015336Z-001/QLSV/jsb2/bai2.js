// ke thua trong js: extend and new

var dssv = new DanhSachSV();
var validation = new Validation();
getLocalStore();
function getEle(id) {
  return document.getElementById(id);
}

function layDuLieuDauVao(isAdd) {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _email = getEle("txtEmail").value;
  var _passSv = getEle("txtPass").value;
  var _dateSv = getEle("txtNgaySinh").value;
  var _KhSV = getEle("khSV").value;
  var _toanSv = getEle("txtDiemToan").value;
  var _lySv = getEle("txtDiemLy").value;
  var _hoaSv = getEle("txtDiemHoa").value;

  //dong goi lai chi bang mot bien
  // isValid = true thi duoc phep them vao mang
  var isValid = false;
  if (isAdd == false) {
    isValid = validation.kiemTraRong(_maSV, "divIdError", "khong duoc rong");
  }
  if (isValid) {
    var sinhVien = new SinhVien(
      _maSV,
      _tenSV,
      _email,
      _passSv,
      _dateSv,
      _KhSV,
      _toanSv,
      _lySv,
      _hoaSv
    );
    return sinhVien;
  }
  return null;
}
// add sinh vien
//call back function
getEle("btnAdd").addEventListener("click", function () {
  var sinhVien = layDuLieuDauVao(false);
  if (sinhVien) {
    sinhVien.tinhDiemTrungBinh();
    dssv.themSinhVien(sinhVien);
    taoBang(dssv.list);
    setLocalStore();
    console.log(dssv);
  }
});

//tao bang
function taoBang(arr) {
  getEle("tbodySinhVien").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    //tao dong
    var tagTr = document.createElement("tr");
    //tao cot
    var tagTD_MaSV = document.createElement("td");
    var tagTD_TenSV = document.createElement("td");
    var tagTD_EmailSV = document.createElement("td");
    var tagTD_DateSV = document.createElement("td");
    var tagTD_KhSV = document.createElement("td");
    var tagTD_DTBSV = document.createElement("td");
    var tagButton = document.createElement("td");
    var editButton = document.createElement("td");

    //tao noi dung cho 6 cot
    tagTD_MaSV.innerHTML = arr[i].maSV;
    tagTD_TenSV.innerHTML = arr[i].tenSV;
    tagTD_EmailSV.innerHTML = arr[i].email;
    tagTD_DateSV.innerHTML = arr[i].ngaySinh;
    tagTD_KhSV.innerHTML = arr[i].khoaHoc;
    tagTD_DTBSV.innerHTML = arr[i].DTB;
    tagButton.innerHTML =
      '<button class="btn btn-danger" onclick = "xoaSinhVien(\'' +
      arr[i].maSV +
      "')\" >delete</button>";
    editButton.innerHTML =
      '<button class="btn btn-danger" onclick = "suaSinhVien(\'' +
      arr[i].maSV +
      "')\" >Edit</button>";

    tagTr.appendChild(tagTD_MaSV);
    tagTr.appendChild(tagTD_TenSV);
    tagTr.appendChild(tagTD_EmailSV);
    tagTr.appendChild(tagTD_DateSV);
    tagTr.appendChild(tagTD_KhSV);
    tagTr.appendChild(tagTD_DTBSV);
    tagTr.appendChild(tagButton);
    tagTr.appendChild(editButton);

    getEle("tbodySinhVien").appendChild(tagTr);
  }
}

// xoa sinh vien
function xoaSinhVien(maSv) {
  dssv.xoaSinhVien(maSv);
  setLocalStore();
  taoBang(dssv.list);
}
// edit sinh vien
function edit(maSv) {
  console.log(maSv);
}

function setLocalStore() {
  //kieu json
  // day len local thi phai chuyen kieu json thanh string
  var arrString = JSON.stringify(dssv.list);
  //khai bao ten local la DSSV
  localStorage.setItem("DSSV", arrString);
}

//lay data ttong local
function getLocalStore() {
  //chuyen string thanh json
  if (localStorage.getItem("DSSV")) {
    var data = localStorage.getItem("DSSV");
    dssv.list = JSON.parse(data);
    taoBang(dssv.list);
  }
}

//lay thong tin sv
function suaSinhVien(maSV) {
  var sinhVien = dssv.layThongTinSinhVien(maSV);
  getEle("btnUpdate").style.display = "inline-block";
  //dom lai mot lan nua
  getEle("txtMaSV").value = sinhVien.maSV;
  getEle("txtMaSV").disabled = true;
  getEle("txtTenSV").value = sinhVien.tenSV;
  getEle("txtEmail").value = sinhVien.email;
  getEle("txtPass").value = sinhVien._matKhau;
  getEle("txtNgaySinh").value = sinhVien._ngaySinh;
  getEle("khSV").value = sinhVien._khoaHoc;
  getEle("txtDiemToan").value = sinhVien.toan;
  getEle("txtDiemLy").value = sinhVien.ly;
  getEle("txtDiemHoa").value = sinhVien.hoa;
}

//capnhatSV
getEle("btnUpdate").addEventListener("click", function () {
  var sinhVien = layDuLieuDauVao();
  sinhVien.tinhDiemTrungBinh();
  dssv.capNhatSinhVien(sinhVien);
  setLocalStore();
  taoBang(dssv.list);
});

function returnTest() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (j === 2) {
        break;
      }
      console.log(j + "a");
    }
  }
  console.log("abd");
}
returnTest();

getEle("txtSearch").addEventListener("keyup", function () {
  var key = getEle("txtSearch").value;
  var arrSearch = dssv.timKiemSinhVien(key);
  taoBang(arrSearch);
});
//reset form
getEle("btnReset").addEventListener("click", function () {
  getEle("resetForm").reset();
  getEle("btnUpdate").style.display = "none";
  getEle("txtMaSV").disabled = false;
});
