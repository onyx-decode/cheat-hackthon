document.querySelector('#app').addEventListener('click', function(e) {
    if (e.target.matches('.button1')) {
      alert('Button1 clicked!');
    }
    if (e.target.matches('.button2')) {
        alert("Button 2 clicked!");
    }
  });
  