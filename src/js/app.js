import { ReadMoreOverlay, ReadMoreBtn } from './read-more';

const articlesOne = document.querySelectorAll('.one article');
const articlesTwo = document.querySelectorAll('.two article');


// if (articleContent.length > 0) {
    new ReadMoreOverlay({
        selectors: articlesOne,
        text: 'Read More',
        length: 500,
        sliceLength: 300
    });

    new ReadMoreBtn({
        selectors: articlesTwo,
        text: 'Read More',
        length: 500,
        sliceLength: 300
    });
// }
