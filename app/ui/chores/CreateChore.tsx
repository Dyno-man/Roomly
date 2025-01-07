interface choreDetailsProps {
    chore: {
        id: number,
        choreTitle: string,
        choreDesc: string,
        choreWeight: number,
    }
}

export function CreateChore({ chore } : choreDetailsProps) {
    const { id, choreTitle, choreDesc, choreWeight } = chore
    return (
        <div className="">
            <br />
            <span><b>Title: </b>{choreTitle}</span>
            <br />
            <span><b>Description: </b>{choreDesc}</span>
            <br />
            <span><b>Chore Weight: </b>{choreWeight}</span>
            <br />
        </div>
    )
}
