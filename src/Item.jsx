function Item({
    id,
    name,
    image,
    alt,
    years,
    luckyNumbers,
    luckRating,
    careerRating,
    wealthRating,
    romanceRating,
    healthRating,
}) {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-2 bg-[#971a1f] hover:bg-[#be2b30] border-4 border-[#FFD84B] text-white h-screen md:h-auto">
            <p className="relative top-2 font-bold">
                {name === "Dragon" && "[CURRENT]"}
            </p>
            <h1 className="font-bold text-4xl">{name}</h1>
            <img src={image} className="w-20" alt={alt} title={alt} />
            <p>
                Years: <span className="font-bold">{years.join(", ")}</span>
            </p>
            <p>Lucky Numbers: {luckyNumbers.join(", ")}</p>
            <p>Luck Rating: {luckRating}</p>
            <p>Career Rating: {careerRating}</p>
            <p>Wealth Rating: {wealthRating}</p>
            <p>Romance Rating: {romanceRating}</p>
            <p>Health Rating: {healthRating}</p>
        </div>
    );
}

export default Item;
