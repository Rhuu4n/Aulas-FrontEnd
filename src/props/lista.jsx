export default function Lista({tarefas}){
    return(
        <ul>
            {tarefas.map((tarefas, index) => (
                <li key={index}>{tarefas}</li>
            ))}
        </ul>
    );
}