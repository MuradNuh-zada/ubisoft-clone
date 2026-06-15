const name: string = "Ubisoft  SAaALAam";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center">
      <h1 className="text-5xl text-black font-bold">{name}</h1>
    </div>
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
