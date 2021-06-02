
function getRandomQuoteId(quotes) {
    return Math.floor(Math.random() * quotes);
}

function formatLongQuote(quoteObj) {
    const author = quoteObj.author;
    const quote = quoteObj.quote

    const lineBreaker = (longQuote) => {
        let firstLine;
        let remainingQuote;
        if (longQuote[50] === ' '){
            firstLine = longQuote.slice(0, 50)
            remainingQuote= longQuote.slice(51)
        } else {
            let index;
            let found = false
            let x = 49
            let y = 51
            while (!found) {
                if(longQuote[x] === ' '){
                    index = x
                    found = true;
                }
                if(longQuote[y]=== ' '){
                    index = y;
                    found = true;
                }
                x--
                y++
            } 
            firstLine = longQuote.slice(0, index);
            remainingQuote = longQuote.slice(index)
            if (remainingQuote.length >= 50){
                return ` ${firstLine} \n ${lineBreaker(remainingQuote)}`
            }
        }
        
    }
     

}