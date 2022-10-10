const inpThuNhap = document.querySelector("#inpThuNhap");
const inpSoNguoiPhuThuoc = document.querySelector("#inpSoNguoiPhuThuoc");
const inpThuePhaiNop = document.querySelector("#inpThuePhaiNop");

// console.log(inpThuNhap, inpSoNguoiPhuThuoc, inpThuePhaiNop);

const calcThue = (thuNhap, soNguoiPhuThuoc) => {
    let thuNhapChiuThue = Math.max(0, thuNhap - 11000000 - soNguoiPhuThuoc * 4400000);
    if (thuNhapChiuThue <= 5000000) return thuNhapChiuThue * 0.05;
    else if (thuNhapChiuThue <= 10000000) return thuNhapChiuThue * 0.1;
    else if (thuNhapChiuThue <= 18000000) return thuNhapChiuThue * 0.15;
    else if (thuNhapChiuThue <= 32000000) return thuNhapChiuThue * 0.2;
    else if (thuNhapChiuThue <= 52000000) return thuNhapChiuThue * 0.25;
    else if (thuNhapChiuThue <= 80000000) return thuNhapChiuThue * 0.3;
    else return thuNhapChiuThue * 0.35;
}

inpThuNhap.onkeyup = function () {
    let thuNhap = Number(inpThuNhap.value) || 0;
    let soNguoiPhuThuoc = Number(inpSoNguoiPhuThuoc.value) || 0;
    if (thuNhap >= 0 && soNguoiPhuThuoc >= 0) {
        let thue = calcThue(thuNhap, soNguoiPhuThuoc);
        inpThuePhaiNop.value = thue + "VNĐ";
    }
    else inpThuePhaiNop.value = "";
}

inpSoNguoiPhuThuoc.onkeyup = function () {
    let thuNhap = Number(inpThuNhap.value) || 0;
    let soNguoiPhuThuoc = Number(inpSoNguoiPhuThuoc.value) || 0;
    if (thuNhap >= 0 && soNguoiPhuThuoc >= 0) {
        let thue = calcThue(thuNhap, soNguoiPhuThuoc);
        inpThuePhaiNop.value = thue + "VNĐ";
    }
    else inpThuePhaiNop.value = "";
}