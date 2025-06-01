function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form submitted!");
}

export default function Form() {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}