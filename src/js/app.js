import { ReadMoreOverlay, ReadMoreBtn } from './read-more';

const articlesOne = document.querySelectorAll('.one article');
const articlesTwo = document.querySelectorAll('.two article');


new ReadMoreOverlay({
    selectors: articlesOne,
    text: 'Read Full Content',
    length: 400,
    sliceLength: 200,
    // overlayStyle: false
});

new ReadMoreBtn({
    selectors: articlesTwo,
    text: 'Read More',
    length: 500,
    sliceLength: 300
});

