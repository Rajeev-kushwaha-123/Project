import {useState, useEffect} from 'react';

export default function Joker() {
    let [joke, setJoke] = useState({});
    let URL="https://official-joke-api.appspot.com/random_joke";
    let newJokes = async ()=>{
        let response = await fetch(URL);
        let responsejson = await response.json();
        console.log(responsejson);
        setJoke({"setup": responsejson.setup, "punchline": responsejson.punchline});
    }
    useEffect(()=>{
        async function fetchJoke() {
            let response = await fetch(URL);
            let responsejson = await response.json();
            console.log(responsejson);
            setJoke({"setup": responsejson.setup, "punchline": responsejson.punchline});
        }
        fetchJoke();
    },[]);
    return(
        <div>
            <h1>Jokes!</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={newJokes}>New jokes</button>
        </div>
    )

}