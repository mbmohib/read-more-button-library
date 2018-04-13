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

        //Make array, If selectors method is not returning array
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
    this.sliceLength = config.sliceLength || 100,
    this.maxHeightValue = config.maxHeight || 1000,
    this.overlayDefaultStyle = config.overlayStyle == undefined ? true : false,
    this.overlayStyle = `
        position: absolute; 
        bottom: 0;
        width: 100%;
        height: 15px;
        background: linear-gradient(rgba(255, 255, 255, .6), #fff);
    `;

    this.expandContent = function(element, overlay, btn) {
        element.style.maxHeight = this.maxHeightValue + 'px';
        overlay.style.display = 'none';
        btn.style.display = 'none';
    }
    
    this.createDiv = function(className) {
        const div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }
    
    this.init = function() {
        let articles = this.articles;

        //Make array, If selectors method is not returning array
        if (!articles.length) {
            articles = Array.from(articles);
            articles.push(this.articles)
        }

        articles.forEach(article => {
            if (article.textContent.length > this.length) {
                article.setAttribute('class', 'article');

                //Creating structure
                const wrapperDiv = this.createDiv('article__content--wrapper');
                const contentDiv = this.createDiv('article__content');
                const overlayDiv = this.createDiv('article__overlay');
                const readMoreDiv = this.createDiv('article__btn');
                
                contentDiv.innerHTML = article.innerHTML;
                article.innerHTML = '';
                readMoreDiv.innerHTML = this.text;

                //Must have style for creating overlay effect with read more
                contentDiv.style.maxHeight = this.sliceLength + 'px';
                contentDiv.style.overflow = 'hidden';
                wrapperDiv.style.position = 'relative';

                //Default overlay style
                if (this.overlayDefaultStyle) {
                    overlayDiv.style.cssText = this.overlayStyle;
                }

                wrapperDiv.appendChild(contentDiv);
                wrapperDiv.appendChild(overlayDiv);
                article.appendChild(wrapperDiv);
                article.appendChild(readMoreDiv);

                readMoreDiv.onclick = () => this.expandContent(contentDiv, overlayDiv, readMoreDiv);
            }
        });
    }

    this.init();
}