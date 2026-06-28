async function getNews(category = "general") {

    clearNews();
    showLoader();

    try {

        const articles = await fetchNews(category);
        showNews(articles);

    }
    catch (error) {

        showError("Unable to load news.");

    }
    finally {

        hideLoader();
    }
}

/* Search */

document
    .getElementById("searchBtn")
    .addEventListener("click", searchNews);

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        document
            .querySelectorAll(".nav-link")
            .forEach(navLink => navLink.classList.remove("active"));

        link.classList.add("active");

        getNews(link.dataset.category);
    });
});

async function searchNews() {

    const query =
        document.getElementById("searchInput").value.trim();

    if (query === "") {

        showError("Enter a search term");

        return;
    }

    clearNews();
    showLoader();

    try {

        const articles = await fetchSearchResults(query);
        showNews(articles);

    }
    catch (error) {

        showError("Search failed.");

    }
    finally {

        hideLoader();
    }
}

getNews();

