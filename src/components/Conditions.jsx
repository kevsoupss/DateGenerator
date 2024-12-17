export default function Conditions(props){
    const conditions = props.conditions.map((condition) => 
         <li key={condition}>{condition}</li>
    )
    return (
        <section>
            <h2>Conditions: </h2>
            <ul>{conditions}</ul>
            {props.conditions.length > 0 && 
            <div className="generate">
                <div>
                    <h3>Ready for generating?</h3>
                </div>
                <button onClick={props.getDates} className="generateBtn">Generate dates</button>
            </div>
            }
        </section>
    )

}