import './Test.css'

const Test = (props) => {
    return (
        <div className="submit">
            <div className="form-group">
                <input className="input" value={props.input} onInput={props.setinput} type="text" placeholder="Your name please" ></input> 
            </div>
            <div className="form-group">
                <button type="button" variant="outlined" className="btn btn-primary" onClick={props.button}>Submit</button>
            </div>
            <div className="data-name">
            {props.name && (
                <p className="data-text">If your name is {props.name}, I think your nationality is {props.nationality}, your ages {props.ages}, and your gender {props.gender}.</p>
            )}
            </div>  
        </div>
    )
};

export default Test;