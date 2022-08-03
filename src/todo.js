export default function Ttodo(props) {
    
    return (
        <>
            <li key={props.id}>{props.title}</li>
            <button onClick={props.delete}>X</button>
        </>
    );
}