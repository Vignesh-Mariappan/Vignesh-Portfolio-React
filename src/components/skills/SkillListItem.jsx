import { ReactComponent as RxJSSvg } from "../../assets/images/rxjs.svg";
import EmotionStyled from "../../assets/images/emotion-styled.png";
import { AiOutlineAntDesign } from "react-icons/ai";

const SkillListItem = ({ skill: { cssClasses, cssStyling, skillName } }) => {
  console.log({ cssClasses, cssStyling, skillName });

  if (skillName === "Ant") {
    return (
      <div className="skill" style={cssStyling} data-aos="fade-up">
        <div className="skill-icon">
          <AiOutlineAntDesign size={48} />
        </div>
        <h4>{skillName}</h4>
      </div>
    );
  }

  if (skillName === "RxJS") {
    return (
      <div className="skill" style={cssStyling} data-aos="fade-up">
        <div className="skill-icon">
          <RxJSSvg style={{ width: "48px", height: "48px" }} />
        </div>
        <h4>{skillName}</h4>
      </div>
    );
  }

  if (skillName === "Emotion") {
    return (
      <div className="skill" style={cssStyling} data-aos="fade-up">
        <div className="skill-icon">
          <img width="48px" height="48px" src={EmotionStyled} alt={"Emotion"} />
        </div>
        <h4>{skillName}</h4>
      </div>
    );
  }

  return (
    <div className="skill" style={cssStyling} data-aos="fade-up">
      <div className="skill-icon">
        <i
          className={cssClasses}
          style={{ fontSize: "48px" }}
          aria-hidden="true"
        ></i>
      </div>
      <h4>{skillName}</h4>
    </div>
  );
};

export default SkillListItem;
