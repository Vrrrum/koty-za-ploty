let headerNode = `
<img src="img/banner.jpg" alt="Koty" id="baner" class="kotImg" />
      <!-- Zdjęcie : <img src ="ścieżka/do/zdjęcia.jpg" alt="Opis alternatywny"> -->
      <nav>
        <ul id="menu">
          <li class="menuItem"><a href="index.html">Strona główna</a></li>
          <li class="menuItem"><a href="galeria.html">Galeria</a></li>
          <li class="menuItem"><a href="ciekawostki.html">Ciekawostki</a></li>
          <li class="menuItem"><a href="inne.html">Inne strony</a></li>
          <li class="menuItem"><a href="lists.html">Listy</a></li>
          <li class="menuItem"><a href="news.html">Kocie newsy</a></li>
          <li class="menuItem"><a href="watroba.html">Wątroba Jasia</a></li>
          <li class="menuItem"><a href="kontakt.html">Kontakt</a></li>
          <li class="menuItem"><a href="zadania.html">Zadania</a></li>
        </ul>
      </nav>
`;

let footerNode = `
<p>Copyright by Kamil</p>
<p><a href="mailto:kmail2006wojtek@gmail.com">Napisz do mnie!!</a></p>
<p class="return">
  <a href="#top"
    ><img src="img/arrow-up.png" alt="Powrót" width="64px"
  /></a>
</p>
`;

inject(headerNode, "#top");
inject(footerNode, "footer");

function inject(content, target) {
  document.querySelector(target).innerHTML = content;
}

let appendArticle = [];
appendArticle[0] = document.getElementById("article0");
appendArticle[1] = document.getElementById("article1");
appendArticle[2] = document.getElementById("article2");
appendArticle[3] = document.getElementById("article3");

function site(siteNum) {
  switch (siteNum) {
    case 0:
      appendArticle[0].style.display = "block";
      appendArticle[1].style.display = "none";
      appendArticle[2].style.display = "none";
      appendArticle[3].style.display = "none";
      break;
    case 1:
      appendArticle[0].style.display = "none";
      appendArticle[1].style.display = "block";
      appendArticle[2].style.display = "none";
      appendArticle[3].style.display = "none";
      break;
    case 2:
      appendArticle[0].style.display = "none";
      appendArticle[1].style.display = "none";
      appendArticle[2].style.display = "block";
      appendArticle[3].style.display = "none";
      break;
    case 3:
      appendArticle[0].style.display = "none";
      appendArticle[1].style.display = "none";
      appendArticle[2].style.display = "none";
      appendArticle[3].style.display = "block";
      break;
  }
}
