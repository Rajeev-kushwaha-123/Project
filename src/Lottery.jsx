import { useState } from "react"
import './Lottery.css';
import {genTicket,sum} from "./helper";

export default function Lottery() {
    let [tickets, setTickets] = useState(genTicket(3));
    let isWinning = sum(tickets)=== 15; 
    
    let buyTicket = () => {
        setTickets(genTicket(3));
    }

    return (
        <div>
            <h2>Lottery Game Begins!</h2>
            <div className="ticket">
                 <span>{tickets[0]}</span>
                 <span>{tickets[1]}</span>
                 <span>{tickets[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy Ticket </button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}