import { organization } from "../Data/organization";

function Organization() {
  return (
    <div>
      <h2>Organization</h2>

      {organization.map((person, index) => (
        <div key={index}>
          <span>
            {person.firstName} {person.lastName}
          </span>
          {" - "}
          <span>{person.role}</span>
        </div>
      ))}
    </div>
  );
}

export default Organization;
