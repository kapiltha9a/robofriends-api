import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <>
            {
                robots.map((robot) => {
                    return <Card robot={robot} key={robot.id} />
                })
            }        
        </>
    );
};

export default CardList;