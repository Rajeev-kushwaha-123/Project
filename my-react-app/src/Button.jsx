function hello(){
    console.log("Hello, World!");
}


export default function Button(){
    return(
        <div>
            <button onClick={hello}>click me!</button>
        </div>
        
    )
}
