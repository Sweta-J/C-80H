
function  Paragraph1(){
    var Paragraph1_array = "";
    var texts1_array = [];
    for (i = 1;i <= 6;i++) {
        texts1_array.push(document.getElementById("paragraph1_input_" + i).value);
    }
    Paragraph1_array = texts1_array.join(". ");
    document.getElementById("p1").innerHTML = Paragraph1_array;
}
function  Paragraph2(){
    var Paragraph2_array = "";
    var texts2_array = [];
    for (i = 1;i <= 6;i++) {
        texts2_array.push(document.getElementById("paragraph2_input_" + i).value);
    }
    Paragraph2_array = texts2_array.join(". ");
    document.getElementById("p2").innerHTML = Paragraph2_array;
}
