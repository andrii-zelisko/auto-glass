import {Button, Popover} from "antd";
export default function Header(props) {
  const { workSchedule } = props;

  function getWorkScheduleContent() {
    const workScheduleDays = [];
    Object.entries(workSchedule.data).map((item, index) => {
      workScheduleDays.push(<div className={"week-day"} key={index}>{item[0]}: <span className={"day-hours"}>{item[1]}</span></div>);
    });
    return <div className={"work-schedule-content"}>{workScheduleDays}</div>;
  }

  return (
    <div className="header">
      <h1>Avtosklo Zelena</h1>
      <p>251 Zelena St.</p>
      <a href="tel:+38 (032) 225 93 30">+38 (032) 225 93 30</a>
      <a href="mailto:Avtosklo_Lviv@i.ua">Avtosklo_Lviv@i.ua</a>
      <Popover content={getWorkScheduleContent()} title={workSchedule.title} trigger="click">
        <Button ghost={true}>{workSchedule.title}</Button>
      </Popover>
    </div>
  );
}