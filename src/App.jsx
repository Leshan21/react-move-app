import MoveCard from "./components/MoveCard";

function App() {
  return (
    <>
      <MoveCard
        movie={{
          title: "title here",
          release_date: "2024-09-10",
        }}
      />
    </>
  );
}

export default App;
