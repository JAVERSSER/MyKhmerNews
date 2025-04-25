function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No previous page found.");
    }
}

  function Myclick() {
    const nav = document.getElementById('navbarSupportedContent');
    nav.classList.toggle('show'); // show/hide the navbar content
  }

