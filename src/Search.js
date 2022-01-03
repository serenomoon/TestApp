import './Search.css'

const Search = (props) => {
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
                <p className="data-text">
                    If your name is {props.name}, 
                    I think your nationality is 
                    { props.nationality.map(nationality =>  ` ${nationality.country_id}(with a probability of ${nationality.probability}),` )} 
                    your age is {props.age}, 
                    and your gender {props.gender}
                    (with a probability of {props.genderprob}).
                </p>
            )}
            </div>  
        </div>
    )
};

export default Search;