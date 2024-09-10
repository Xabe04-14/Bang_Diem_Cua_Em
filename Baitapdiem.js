function myFunction1() {
    var s1 = parseFloat(document.getElementById('s1').value);
    var s2 = parseFloat(document.getElementById('s2').value);
    var year = parseInt(document.getElementById('year').value);
    var sum;
    
    // Tính tổng điểm
    switch (year) {
        case 1:
            sum = (s1 + (s2*2)) / 3;
            break;
        case 2:
            sum = ((s1*2) + (s2*3)) / 5
            break;
        case 3:
            sum = ((s1*3) + (s2*4)) / 7;
            break;
        default:
            sum = 0;
            break;
    }
    
  
    var result = "";
    if (sum >= 9) {
        result = "Học sinh xuất sắc";
        document.getElementById('XL').style.color = "yellow";
    } else if (sum >= 8) {
        result = "Học sinh giỏi";
        document.getElementById('XL').style.color = "green";
    } else if (sum >= 6.5) {
        result = "Học sinh khá";
        document.getElementById('XL').style.color = "orange";
    } else if (sum >= 5) {
        result = "Học sinh trung bình";
        document.getElementById('XL').style.color = "blue";
    } else if(sum>=0) {
        result = "Học sinh yếu";
        document.getElementById('XL').style.color = "red";
    }else{
        result="Khong xac dinh"
    }
    
    
    document.getElementById('kq').value = sum;
    document.getElementById('XL').innerHTML = result;
   
}

function myFunction2() {
    alert("Cancel button clicked");
}
