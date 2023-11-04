//declare the trelloData variable
//and object with an array of columns, each column is an object with a name and an array of cards.
// each card is an object with a title, content, a timestamp
let trelloData = {
    columns: [
        {
            name: "To-Do",
            cards: [
                {
                    title: "Example card",
                    content: "Drag this card around to try out the app!",
                    timestamp: null
                }
            ]
        },
        {
            name: "Doing",
            cards: [
                {
                    title: "Lesson in progress",
                    content: "Learning JS events",
                    timestamp: null
                }
            ]
        },
        {
            name: "Done",
            cards: [
                {
                    title: "HTML & CSS",
                    content: "All done with it",
                    timestamp: null
                }
            ]
        }
    ]
}

console.log(trelloData);

function renderColumns(){
    let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
    //Removing any stale or old HTML content
    trelloDataRowRootNode.innerHTML = "";
    //Generate new HTML content
    trelloData.columns.forEach((column) => {
        console.log(column.name);
        
        //create the element to contain the column
        let columnNode = document.createElement("div");
        columnNode.classList.add("trelloColumn");
        
        //create content to render column data
        let columnHeading = document.createElement("h3");
        columnHeading.innerText = column.name;
        columnNode.appendChild(columnHeading);
        
        //create the cards
        column.cards.forEach((card) => {
            //Find the card preview, copy it, and save the copy to the variable
            let newCard = document.getElementById("cardPreview").cloneNode(true);

            if (!card.timestamp || isNaN(card.timestamp)){
                card.timestamp = Date.now();
            }

            newCard.id = card.timestamp;

            //Find the h3 of the card title and change its content
            newCard.querySelector("h3").innerText = card.title;
            newCard.querySelector(".cardDisplay-title").innerText = card.title;
            //Same as the above for the paragraph
            newCard.querySelector(".cardDisplay-content").innerText = card.content;
            //After data is all done, attach card to column
            columnNode.appendChild(newCard);
        })


        //after column is created, append it to its node as a child
        trelloDataRowRootNode.appendChild(columnNode);
    })
}

renderColumns();