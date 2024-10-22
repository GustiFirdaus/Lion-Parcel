var footerItems = document.querySelectorAll('.footer-item');
var maxWidth = 100 / footerItems.length + '%';
footerItems.forEach(function(item) {
    item.style.width = maxWidth;
});
function changeColor(element) {
    element.style.color = "red";
}
function resetColor(element) {
    element.style.color = "black";
}