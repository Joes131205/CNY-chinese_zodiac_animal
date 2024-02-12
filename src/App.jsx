import chineseZodiac from "./chineseZodiac.js";
import Item from "./Item.jsx";
import Warning from "./Warning.jsx";
function App() {
    const items = chineseZodiac.map((item) => {
        return (
            <Item
                key={item.id}
                name={item.name}
                image={item.image}
                alt={item.alt}
                years={item.years}
                luckyNumbers={item.luckyNumbers}
                luckRating={item.luckRating}
                careerRating={item.careerRating}
                wealthRating={item.wealthRating}
                romanceRating={item.romanceRating}
                healthRating={item.healthRating}
            />
        );
    });
    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-2 w-screen h-screen md:mt-0 mt-10">
                {items}
            </div>
            <Warning />
        </>
    );
}

export default App;
