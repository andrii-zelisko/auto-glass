export default function Logo(props) {
  const { data } = props;
  const redColor = "#ff3333";
  return (
    <div className="logo-container">
      <h1 className="logo-name">{data.name}</h1>
    </div>
  );
}