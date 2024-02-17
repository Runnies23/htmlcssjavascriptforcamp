document.getElementById('buttonlink').addEventListener('click', function() {
   window.location.href = 'https://www.youtube.com/watch?v=4dDUWRWqcIo&t=27s';
});

document.querySelector('.hovereffect').addEventListener('mouseover', function() {
   this.style.transform = "scale(1.1)";
});

document.querySelector('.hovereffect').addEventListener('mouseout', function() {
   this.style.transform = "scale(1)";
});

document.getElementById('toggletextbtn').addEventListener('click', function() {
   var text = document.getElementById('toggletext');
   if (text.style.display === "none") {
       text.style.display = "block";
   } else {
       text.style.display = "none";
   }
});
