import characters from "./Sample03_data";

const CharacterToDisplay = ({ character }) => {
  const { name, height, mass, eye_color, gender } = character;

  return (
    <>
      <div>
        <h3>full name {name}</h3>
        <p>gender {gender}</p>
        <p>height {height}</p>
        <p>mass {mass}</p>
        <p>eye colour {eye_color}</p>
      </div>
    </>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  textAlign: "center",
};

const Sample03 = () => {
  const charactersArr = characters.map((character) => (
    <CharacterToDisplay key={character.name} character={character} />
  ));
  //   const charactersArr = characters.map((character) => {
  //     return <CharacterToDisplay key={character.name} character={character} />;
  //   });

  return (
    <>
      <div style={gridStyle}>{charactersArr}</div>
    </>
  );
};

export default Sample03;
