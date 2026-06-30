const container = document.getElementById("newsContainer");
const loader = document.getElementById("loader");
const errorBox = document.getElementById("error");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function clearNews() {
  container.innerHTML = "";
  errorBox.textContent = "";
}

function showError(message) {
  errorBox.textContent = message;
}

function showNews(articles) {
  container.innerHTML = "";

  if (!articles || articles.length === 0) {
    showError("No news found.");
    return;
  }

  articles.forEach(article => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${article.urlToImage || "https://via.placeholder.com/400"}">

      <div class="card-content">
        <h3>${article.title}</h3>

        <p>
          ${article.description || "No description available"}
        </p>

        <div class="news-info">
          Source: ${article.source.name}
          <br>
          ${new Date(article.publishedAt).toLocaleDateString()}
        </div>

        <a href="${article.url}" target="_blank">
          Read Full Story
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}