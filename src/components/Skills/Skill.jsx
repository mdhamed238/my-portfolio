

const Skill = ({ name, level }) => {
    return (
        <div className="skill">
            <div className="info" >
                <span>{name}</span>
                <span>{level}%</span>
            </div >
            <div className="bar">
                <div className="level" style={{ width: `${level}%` }}></div>
            </div>

        </div >
    );
}


export default Skill;