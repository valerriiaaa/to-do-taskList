import DoneButton from "./DoneButton.jsx";

export default function ListElement({ id, title, text, onDone, flag }) {
  return (
    <div className="listItem">
      <h2>{id + ". " + title}</h2>
      <p>{text}</p>
      <div className="button-conteiner">
        <DoneButton
          onClick={onDone}
          color={flag ? "primary" : "secondary"}
        />
      </div>
    </div>
  );
}
