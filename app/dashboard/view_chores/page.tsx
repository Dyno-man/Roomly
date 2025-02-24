import { ViewChore } from "@/app/ui/chores/ViewChore"

const choreList = [
    {
        chore_id: 1,
        chore_title: "Clean Counters",
        chore_desc: "Clean all the kitchen counters",
        chore_weight: 1,
    },
    {
        chore_id: 2,
        chore_title: "Vaccum",
        chore_desc: "Vaccum the kitchen, living room, and front entrance",
        chore_weight: 2,
    },
    {
        chore_id: 3,
        chore_title: "Clean Fridge",
        chore_desc: "Throw out old food and wipe fridge clean",
        chore_weight: 5,
    },
    {
        chore_id: 4,
        chore_title: "Mop Kitchen",
        chore_desc: "Just Mop all wooden floors",
        chore_weight: 2,
    },
]

export default function Page(){
    return(
        <main>
            <p>Chore List Page</p>
            {choreList.map((chore) => {
                return (
                    <ViewChore key={chore.chore_id} chore={chore} />
                )
            })}
        </main>
    )
}