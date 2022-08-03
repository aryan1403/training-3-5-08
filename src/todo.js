export default function Ttodo(props) {
    
    return (
        <>
            <li key={props.id}>{props.title}</li>
            <button value={props.id} ref={props.reference} onClick={() => props.delete}>X</button>
        </>
    );
}