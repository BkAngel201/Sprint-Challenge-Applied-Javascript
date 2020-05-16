// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainerElement = document.querySelector('div.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((response) => {
    for (const articleSection in response.data.articles) {
        console.log(articleSection);
        
        if (response.data.articles.hasOwnProperty(articleSection)) {
            response.data.articles[articleSection].forEach(el => {
                cardsContainerElement.appendChild(cardMaker(el, articleSection))
            })
            
        }
    }
    
})


const cardMaker = (cardData, section) => {
    const card = document.createElement('div')
    card.setAttribute('data-section', section)
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = cardData.headline
    card.appendChild(headline)

    const author = document.createElement('div')
    author.classList.add('author')

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
    
            const img = document.createElement('img')
            img.src = cardData.authorPhoto
            imgContainer.appendChild(img)

        author.appendChild(imgContainer)

        const authorName = document.createElement('span')
        authorName.textContent = `By ${cardData.authorName}`
        author.appendChild(authorName)
        
    card.appendChild(author)

    return card
}