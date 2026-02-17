import "./SkillContainer.css";

interface SkillContainerProps {
  title: string;
  skills: string[];
}

function SkillContainer({ title, skills }: SkillContainerProps) {
  return (
    <div>
      <strong>{title}</strong>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default SkillContainer;
