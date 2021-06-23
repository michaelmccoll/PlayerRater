import RaterPlayer from "./RaterPlayer";

const RaterList = ({match, handleChange}) => {

    
    if (!match.teamsheet) {
        return <h1>Loading...</h1>
    }
    const raterNodes = match.teamsheet.map(player => {
        return(
            <RaterPlayer player={player} key={player.id} handleChange={handleChange}></RaterPlayer>
        )
    })

    return(
        <>
            {raterNodes}
        </>
    )
}

export default RaterList;


