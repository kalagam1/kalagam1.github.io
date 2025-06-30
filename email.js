var shown = false;
function showhide() {
  if (shown) {
    document.getElementById('email').innerHTML = "show my email";
    shown = false;
  } else {
    var myemail = "<a href='mailto:kalagam1@udayton.edu'>kalagam1@udayton.edu</a>";
    document.getElementById('email').innerHTML = myemail;
    shown = true;
  }
}

