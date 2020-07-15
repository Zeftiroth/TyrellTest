import React , {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './UseCards.css'

function useCards() {
    // setting up the deck of cards
    const [cards,setCards] = useState( ["AS", "2S", "3S", "4S", "5S","6S","7S","8S","9S","10S","JS","QS","KS","AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AD", "2D", "3D", "4D", "5D","6D","7D","8D","9D","10D","JD", "QD", "KD","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"])
    // cards that has been dealt to the players
    const [dealtCards, setDealtCards] = useState("")
    // number of players playing
    const [players, setPlayers] = useState("")
    
    //function to start dealing out the card depending on the no. of players
    const deal = e => {
        e.preventDefault()
        //set up temp card deck because you cant directly manipulate the DOM
        let tempCards = [...cards]
        console.log(tempCards)
        //array to cointain the dealt cards and later to be displayed
        let newDealtCards = []
        // shuffle the deck
        tempCards.sort(()=> Math.random() -0.5)
        // a for loop for the card to be dealt
        let i = 0
        let p = players
        if (p > 0 && p < 53) {

            for (i = 0; i < p; i++){
                newDealtCards.push(tempCards[0])
                
                
                // removing the 1st card of the deck after its been dealt
                tempCards.splice(0,1)
    
            }
        }
        // conditions when input is not desired
        else if (p > 0 && p > 52) {
             for (i = 0; i < 53; i++) {
               newDealtCards.push(tempCards[0]);
               

               tempCards.splice(0, 1);
             }


        }
        else if (p < 0 || p == "" || p == null || isNaN(p)) {
            alert("Input value is in valid. Please enter again")
        }
        // use join() to generate string with comma
        setDealtCards(newDealtCards.join(', '))
        
        console.log(dealtCards)
        
        
     }
     // use to handle value change from input form 
    const handleContentChange = e => {
        setPlayers(e.target.value)

    }

    



    return (
      <>
        <div>
          <form>
            <div>Number of Players</div>
            <input type="text" onChange={handleContentChange}></input>
            <button onClick={deal}> Deal </button>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <div
            class="col-4 text-wrap d-flex justify-content-center "
            id="cardDealt"
          >
              {dealtCards}
            
          </div>
        </div>
      </>
    );
}

export default useCards
