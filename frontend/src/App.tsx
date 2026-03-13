import "./App.css";
import team from "./CollegeBasketballTeams.json";

function Welcome() {
  return (
    <>
      <h1>College Basketball teams</h1>
      <p>Here is a list of the teams in college</p>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h3>{school} "{name}"</h3>
      <h4>
        Location: {city}, {state}
      </h4>
    </>
  );
}

function TeamList() {
  return (
    <>
      {
        team.teams.map((singleTeam) => (
          <>
            <div className="team-card" key={singleTeam.tid}>
            <Team {...singleTeam} />
            </div>
            <hr/> 
          </>
        ))
      }
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <br />
      <br />
      <TeamList />
    </>
  );
}

export default App;
