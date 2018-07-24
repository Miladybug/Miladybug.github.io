var slideIndexBike = [1,1,1];
var slideIdBike = ["bike-grid", "bike-grid2", "bike-grid3"]
showSlidesBike(1, 0);
showSlidesBike(1, 1);
showSlidesBike(1, 2)

function plusSlidesBike(n, no) {
  showSlidesBike(slideIndexBike[no] += n, no);
}

function showSlidesBike(n, no) {
  var i;
  var x = document.getElementsByClassName(slideIdBike[no]);
  if (n > x.length) {slideIndexBike[no] = 1}    
  if (n < 1) {slideIndexBike[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndexBike[no]-1].style.display = "block";  
}