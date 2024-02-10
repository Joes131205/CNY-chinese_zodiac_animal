import chineseZodiac from "./chineseZodiac.js";
import Item from "./Item.jsx";
function App() {
    const items = chineseZodiac.map((item) => {
        return (
            <Item
                id={item.id}
                name={item.name}
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
        <div className="grid grid-cols-6 grid-rows-2 w-screen h-screen">
            {items}
        </div>
    );
}

export default App;
