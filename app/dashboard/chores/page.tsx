import { CreateChore } from "@/app/ui/chores/CreateChore"

const choreList = [
    {
        id: 1,
        choreTitle: "Clean Counters",
        choreDesc: "Clean all the kitchen counters",
        choreWeight: 1,
    },
    {
        id: 2,
        choreTitle: "Vaccum",
        choreDesc: "Vaccum the kitchen, living room, and front entrance",
        choreWeight: 2,
    },
    {
        id: 3,
        choreTitle: "Clean Fridge",
        choreDesc: "Throw out old food and wipe fridge clean",
        choreWeight: 5,
    },
    {
        id: 4,
        choreTitle: "Mop Kitchen",
        choreDesc: "Just Mop all wooden floors",
        choreWeight: 2,
    },
]

export default function Page(){
    return(
        <main>
            <p>Chore List Page</p>
            {choreList.map((chore) => {
                return (
                    <CreateChore key={chore.id} chore={chore} />
                )
            })}
        </main>
    )
}