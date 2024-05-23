//* SCROLL EFFECT
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".section");
  var navbarLinks = document.querySelectorAll("sidebar a");

  sections.forEach(function (section, index) {
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      navbarLinks[index].classList.add("active");
    } else {
      navbarLinks[index].classList.remove("active");
    }
  });
});

//* ALERT

document.addEventListener("DOMContentLoaded", function () {
  var copyEmail = document.getElementById("copyEmail");
  var copyPhone = document.getElementById("copyPhone");

  copyEmail.addEventListener("click", function () {
    copyTextToClipboard(copyEmail.innerText);
  });

  copyPhone.addEventListener("click", function () {
    copyTextToClipboard(copyPhone.innerText);
  });

  function copyTextToClipboard(text) {
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied successfully!");
  }
});
