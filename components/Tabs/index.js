// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicsElement = document.querySelector('div.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then((response) => {
    response.data.topics.forEach((el) => {
        const topic = document.createElement('div')
        topic.classList.add('tab')
        topic.textContent = el
        topic.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach((el) => {
                el.style.display = 'none'
            })
            let dataSection = el
            if( el == "node.js") {
                dataSection = "node"
            }
            document.querySelectorAll(`.card[data-section="${dataSection}"]`).forEach((el) => {
                el.style.display = "flex"
            })
        })
        topicsElement.appendChild(topic)
        
    })
    
})
