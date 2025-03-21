function changeOrder(){
    var paragraph = document.getElementById("paragraph");
    var image = document.getElementById("image");
    var container = document.getElementById("container")
    if (paragraph.previousElementSibling === image){  
         document.getElementById("container").insertBefore(paragraph, image);
    } else { 
        document.getElementById("container").insertBefore(image, paragraph);
        }
}