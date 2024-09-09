function myFunction1() {
    var s1 = parseFloat(document.getElementById('s1').value);
    var s2 = parseFloat(document.getElementById('s2').value);
    var year = parseInt(document.getElementById('year').value);
    var sum;
    
    // Tính tổng điểm
    switch (year) {
        case 1:
        case 2:
        case 3:
            sum = (s1 + s2) / 2;
            break;
        default:
            sum = 0;
            break;
    }
    
    // Xác định loại học sinh
    var result = "";
    if (sum >= 9) {
        result = "Học sinh xuất sắc";
    } else if (sum >= 8) {
        result = "Học sinh giỏi";
    } else if (sum >= 6.5) {
        result = "Học sinh khá";
    } else if (sum >= 5) {
        result = "Học sinh trung bình";
    } else {
        result = "Học sinh yếu";
    }
    
    // Cập nhật ô Sumerise và thẻ kết quả chi tiết
    document.getElementById('kq').value = sum.toFixed(2);
    document.getElementById('XL').innerHTML = result;
    document.getElementById('XL').style.color = "red";
}

function myFunction2() {
    // Implement functionality for Cancel button if needed
    alert("Cancel button clicked");
}
