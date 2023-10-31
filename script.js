document.getElementById('checkBB').addEventListener('change', function() {
    var divExpansivel = document.querySelector('.menu-lateral');
    if (this.checked) {
      divExpansivel.classList.add('expandida');
    } else {
      divExpansivel.classList.remove('expandida');
    }
  });