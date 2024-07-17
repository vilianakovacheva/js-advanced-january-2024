function getArticleGenerator(articles) {
    let div = document.getElementById('content');
    let allArticles = Array.from(articles);

    return function () {
        if (allArticles.length == 0) {
            return;
        }
        let article = allArticles.shift();
        let createdArticle = document.createElement('article');
        createdArticle.textContent = article;
        div.appendChild(createdArticle);
    }
}