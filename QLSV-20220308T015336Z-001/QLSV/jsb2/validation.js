function Validation() {
  this.kiemTraRong = function (input, divID, mess) {
    if (input.trim() === "") {
      //thong bao loi
      getEle(divID).innerHTML = mess;
      getEle(divID).style.backgroundColor = "red";
      return false;
    } else {
      getEle(divID).innerHTML = "";
      getEle(divID).style.backgroundColor = "";
      return true;
    }
  };
}
console.log("abc");
