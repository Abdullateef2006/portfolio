function Form() {
    return(
        <div className="App-header">
            <h3 className="contactMe">Contact me</h3>
            <h4> <span>Get </span>  in touch</h4>
            <p className="p1">Please use the form below to contact me</p>
            <div className="formDiv">
            
            <form>
            <label className="p1">Name</label><br/>
            <input type="text"></input><br/>
            <label className="p1">Email</label><br/>
            <input type="text"></input><br/>
            <label className="p1">Message</label><br/>
            <input type="text"></input><br/>
            <input type="submit" className="btn"></input>

            </form>

            </div>


        </div>

    )
    
}

export default Form