export function ReadMoreBtn(config) {
    this.articles = config.selectors,
    this.text = config.text || 'Read More',
    this.length = config.length || 300,
    this.sliceLength = config.sliceLength || 100,

    this.expandContent = function(element, text) {
        element.textContent = text
    }

    this.createBtn = function() {
        const readMoreBtn = document.createElement('span');
        readMoreBtn.setAttribute('class', 'read-more');
        readMoreBtn.innerHTML = this.text;
        return readMoreBtn;
    }

    this.excerpt = function(element) {
        return element.textContent.slice(0, this.sliceLength) + '.... ';
    }
    
    this.init = function() {
        let articles = this.articles;

        //Make array, If selectors method is not return array
        if (!articles.length) {
            articles = Array.from(articles);
            articles.push(this.articles)
        }

        articles.forEach(article => {
            if (article.textContent.length > this.length) {
                const fullArticle = article.textContent;
                const btn = this.createBtn();
                article.textContent = this.excerpt(article);
                article.appendChild(btn);
                btn.onclick = () => this.expandContent(article, fullArticle);
            }
        });
    }

    this.init();
}

export function ReadMoreOverlay (config) {
    this.articles = config.selectors,
    this.text = config.text || 'Read More',
    this.length = config.length || 300,

    this.expandContent = function(element, overlay, btn) {
        element.style.maxHeight = '1000px';
        overlay.style.display = 'none';
        btn.style.display = 'none';
    }

    this.createBtn = function() {
        const readMoreDiv = document.createElement('div');
        readMoreDiv.setAttribute('class', 'article__btn');
        readMoreDiv.innerHTML = this.text;
        return readMoreDiv;
    }
    
    this.createArticleDiv = function() {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute('class', 'article__content--wrapper');
        return wrapperDiv;
    }

    this.createArticleContentDiv = function() {
        const ContentDiv = document.createElement('div');
        ContentDiv.setAttribute('class', 'article__content');
        return ContentDiv;
    }
    
    this.createOverlayDiv = function() {
        const overlayDiv = document.createElement('div');
        overlayDiv.setAttribute('class', 'article__overlay');
        return overlayDiv;
    }
    
    this.init = function() {
        let articles = this.articles;

        //Make array, If selectors method is not return array
        if (!articles.length) {
            articles = Array.from(articles);
            articles.push(this.articles)
        }

        articles.forEach(article => {
            if (article.textContent.length > this.length) {
                article.setAttribute('class', 'article');

                const articleDiv = this.createArticleDiv();
                const contentDiv = this.createArticleContentDiv();
                const overlayDiv = this.createOverlayDiv();
                const readMorebtn = this.createBtn();

                contentDiv.innerHTML = article.innerHTML;
                article.innerHTML = '';

                articleDiv.appendChild(contentDiv);
                articleDiv.appendChild(overlayDiv);
                article.appendChild(articleDiv);
                article.appendChild(readMorebtn);

                readMorebtn.onclick = () => this.expandContent(contentDiv, overlayDiv, readMorebtn);
            }
        });
    }

    this.init();
}