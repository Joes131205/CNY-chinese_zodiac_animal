function Item({
    id,
    name,
    years,
    luckyNumbers,
    luckRating,
    careerRating,
    wealthRating,
    romanceRating,
    healthRating,
}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <h1>{name}</h1>

                <p>Years : {years.join(", ")}</p>
                <p>Lucky Numbers : {luckyNumbers.join(", ")}</p>
                <p>Luck Rating : {luckRating}</p>
                <p>Career Rating : {careerRating}</p>
                <p>Wealth Rating : {wealthRating}</p>
                <p>Romance Rating : {romanceRating}</p>
                <p>Health Rating : {healthRating}</p>
            </div>
        </>
    );
}

export default Item;
