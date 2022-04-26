$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function (){
        $("#myModal").modal();
    });

    function KTTen(){
        var mauKt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if($("#Name").val()==""){
            $("#tbName").html("Không để trống");
            return false;
        }
        if(!mauKt.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(KTTen);

    function KTSoAo(){
        var mauKT =/^\d*S/;
        if($("#Ao").val()==""){
            $("#tbAo").html("Không để trống");
            return false;
        }
        if(!mauKt.test($("#Ao").val())){
            $("#tbAo").html("Dùng số từ 1- 100");
            return false;
        }
        var soAo = $("#Ao").val();
        if(soAo<1||soAo>100){
                $("#tbAo").html(" từ 1- 100");
                return false;
        }
        $("#tbAo").html("*");       
        return true;
    }
    $("#Ao").blur(KTSoAo);

    function KTCLB(){
        var mauKT = /^[A-Z0-9][a-zA-Z0-9]+(\s[A-Z0-9][a-zA-Z0-9]+)*$/;
        if($("#CLB").val()==""){
            $("#tbCLB").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#CLB").val())){
            $("#tbCLB").html("Mỗi kí tự đầu viết hoa ");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(KTCLB);

    function KTNTT(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("Không để trống");
            return false; 
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        if(ntt-today!= 7){
            $("#tbNTT").html("Phải sau hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(KTNTT);

    function KTSDT(){
        var sdt=/^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("Không để trống");
            return false;
        }

        if(!sdt.test($("#SDT").val())){
            $("#tbSDT").html("Nhập theo dạng 0xxx-xxx-xxx trong đó x là số");
            return false;
        }

        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(KTSDT);

    $("#Save").click(function(){
        if(KTTen()== true && KTSoAo == true && KTCLB == true && KTNTT == true && KTSDT == true){
            row = "<tr>"
            row += "<th>" + (i++) +"</th>";
            row += "<th>" + $("#Name").val() +"</th>";
            row += "<th>" + $("#Ao").val() +"</th>";
            row += "<th>" + $("#CLB").val() +"</th>";
            row += "<th>" + $("#NTT").val() +"</th>";
            row += "<th>" + $("#SDT").val() +"</th>";
            row += "<th>" + $("#ADD").val() +"</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})