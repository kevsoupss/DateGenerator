export default function DateSpots(props){
    
    const locationJSON = JSON.parse(props.dateLocations)
    const location = locationJSON.locations
    console.log(location)
    const locationList = location.map((dateSpot) => 
        <section className="dateSpots">
            <h2>{dateSpot["name"]}</h2>
            {/* <img src = {dateSpot["image"]} /> */}
            <ul>
            <li>{dateSpot["cost"]}</li>
            <li>{dateSpot["description"]}</li>
            <li><a target="_blank" href={dateSpot["url"] }>{dateSpot["url"]}</a></li>
            </ul>

        </section>

   )
    return (

        <>
        {locationList}
        </>
        
)
}

