interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_link: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_link}>Acessar repositório</a>
        </li>
    );
}
