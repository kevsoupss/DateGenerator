export default function Location(props){
    const location = <p>{props.location}</p>
    return (
        
        <section>
            <h2 className="Location">Location: </h2>
            <ul><li>{location}</li></ul>
        </section>
    )

}