let result = '';

function xuLyDuLieu(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').value = result;

}

function xuLyKetQua() {
    let ketQua = eval(result);
    document.getElementById('result').value = ketQua;
    result = ketQua;
}

function xoa() {
    document.getElementById('result').value = '0';
    result = '';
}

