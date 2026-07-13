import HomeCartSlider from "@/components/HomeCartSlider";
import Universes from "@/components/Universes";
import Free from "@/components/Free";
import News from "@/components/News";
const Index: React.FC = () => {
  return (
    <main>
      <div className="container xl:px-[72px] max-w-[1776px] mx-auto px-4">
        <HomeCartSlider />
        <HomeCartSlider />
        <Universes />
        <Free />
        <News />
      </div>
    </main>
  );
};
// interface Game {
//   id: number | string;
//   name: string;
//   price: number;
//   discount: number;
//   image: string;
// };
// type Games = Game[];
// const games: Games = [];
// games.push({
//   id: 1,
//   name: "Assassin's Creed Valhalla",
//   price: 59.99,
//   discount: 50,
//   image:
//     "https://store.ubi.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-masterCatalog_ubishops/default/dw1c9e7b8c/images/large/5fdbb4e0d1e9a.jpg",
// });
// games.push({
//   id: 2,
//   name: "Assassin's Creed Odyssey",
//   price: 39.99,
//   discount: 25,
//   image:
//     "https://store.ubi.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-masterCatalog_ubishops/default/dw1c9e7b8c/images/large/5fdbb4e0d1e9a.jpg",
// });
// console.log(games);
export default Index;
