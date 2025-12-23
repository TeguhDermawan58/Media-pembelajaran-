var images = [
    '../../Images/Stuff/ProfilePictures/td.png', 
];

var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
var animation = setInterval(next,2000)