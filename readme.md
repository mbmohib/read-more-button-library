# Read More Button Library

This is a very simple plugin for creating "Read More" buttons for long documents build with Vanila JS 

#### [Demo](https://mbmohib.github.io/read-more-button-plugin/)

  - There are currently two type of "Read More" styles 1. "Overlay Effect with Read More" 2. Simple "Read More"
  - You can change the document length for excerpt and button text
  - For "Overlay Effect with Read More" necessary style is applied by JS, you can disable it
  - Add polyfill for support older browser
  

# Instruction
    
1. Copy 'read-more.js' from dist folder into assets.
2. Your HTML Structure should be : 

```
<div class="selectors">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit......
</div>
```

3. Add this line to the top of the documents

    
```javascript
import { ReadMoreOverlay, ReadMoreBtn } from './read-more';
```
4. Initiate: 

For Overlay Effect : 
```javascript
new ReadMoreOverlay({
    selectors: elements,
    readMoreBtnText: 'Read Full Content',
    length: 400,
    sliceLength: 200,
});
```  

For Simple Effect : 
```javascript
new ReadMoreBtn({
    selectors: elements,
    readMoreBtnText: 'Read More',
    length: 500,
    sliceLength: 300
});
```  


### Option

| Option | Default Value | Value |
| ------ | ------ | ------ |
| selectors | null | Provide appropriate selectors |
| readMoreBtnText | Read More | String
| length | 300 | integer
| sliceLength | 100 | integer
| overlayStyle | null | false (This will prevent adding style to Overlay Div)
| maxHeight | 1000 | integer


# TODO

  - Remove duplicate code
  - Convert into Class from Object
  - Create another "Read More" style
  - Create proper documentation
  - Support jQuery selectors


## License

#### [MIT](./LICENSE)
