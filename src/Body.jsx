import React from "react";
import Location from "./components/Location.jsx";
import Conditions from "./components/Conditions.jsx";
import DateSpots from "./components/DateSpots.jsx";
import{getAI} from "./AI.js"

export default function Body() {
    const [location, setLocation] = React.useState("");
    const [conditions, setConditions] = React.useState([]);
    const [locationInput, setLocationInput] = React.useState("");  
    const [conditionInput, setConditionInput] = React.useState(""); 

    const [dateLocations, setDateLocations] = React.useState("");
    
    function updateLocation(event) {
        event.preventDefault(); 
        setLocation(locationInput); 
        setLocationInput(""); 
    }

    function addCondition(event) {
        event.preventDefault(); 
        setConditions(prevConditions => [...prevConditions, conditionInput]); 
        setConditionInput("");
    }

    async function getAIResponse(){
        const dateAILocations = await getAI(location, conditions)
        //console.log(dateAILocations)
        setDateLocations(dateAILocations)
    }



    return (
            <main>
                <form onSubmit={updateLocation} className="location-form">
                    <input 
                        type="text"
                        aria-label="Add location"
                        name="location"
                        value={locationInput} 
                        onChange={(e) => setLocationInput(e.target.value)} 
                        placeholder="ex. Vancouver, BC"
                    />
                    <button className="submit-location">Add location</button>
                </form>

                <form onSubmit={addCondition} className="condition-form">
                    <input 
                        type="text"
                        aria-label="Add conditions"
                        name="condition"
                        value={conditionInput}
                        onChange={(e) => setConditionInput(e.target.value)} 
                        placeholder="ex. $20-$30 or Physical Activity"
                    />
                    <button className="submit-condition">Add condition</button>
                </form>

                {location && <Location location={location} />}
                {conditions.length > 0 && <Conditions conditions={conditions} getDates={getAIResponse} />}
                {dateLocations && <DateSpots dateLocations={dateLocations} />}
            </main>
    );
}