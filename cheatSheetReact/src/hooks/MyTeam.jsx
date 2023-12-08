import { useState } from "react";
import people from "./MyTeam_data";

const PeopleToAdd = ({ list, setList }) => {
  const addPerson = (person) => {
    setList([...list, person]);
  };

  return people.map((person) => (
    <button
      onClick={() => addPerson(person)}
      //   onClick={() => console.log(person.name)}
      key={person.Id}
      style={{ margin: "10px" }}
    >
      add {person.name}
    </button>
  ));
};

const PeopleList = ({ list }) => {
  return list.map((member) => {
    return <li key={member.Id}>{member.name}</li>;
  });
};

const MyTeam = () => {
  const [list, setList] = useState([]);
  return (
    <>
      <div>
        <PeopleToAdd list={list} setList={setList} />
      </div>
      <div>
        <ul>
          <p>my team</p>
          <PeopleList list={list} />
        </ul>
      </div>
    </>
  );
};

export default MyTeam;
