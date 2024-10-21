

export default function DoneButton({onClick, variant, color}){
    return(
        <button className="btn-done" onClick={onClick} 
        style={{ backgroundColor: color === "primary" ? "grey" : "green", color: "white" }}
         >Done</button>
    )
}