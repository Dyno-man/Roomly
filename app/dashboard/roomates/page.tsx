interface Users {
    uuid: string,
    firstName: string,
    lastName: string,
}

export default async function Page() {

    const data = await fetch('http://localhost:3000/add_user')
    const user = await data

    console.log(data)

    return(
       <div>
       </div>
    )
}