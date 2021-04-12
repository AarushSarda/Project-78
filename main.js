images = ["Mumma.jpeg" , "Papa.jpeg","Aarush 2.jpeg" ];
names = ["Vandana Sarda","Yogendra Kumar Sarda","Aarush Sarda"];
var i = 0 ;
function next () {
    if (i == 3) {
        i = 0;
    }
    var update_img = images[i];
    var update_name = names[i];
    document.getElementById("image").src = update_img;
    document.getElementById("name").innerHTML = update_name;
     i++;
}