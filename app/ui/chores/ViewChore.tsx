'use client'
import { useEffect } from "react";

interface choreDetailsProps {
    chore: {
        chore_id: number,
        chore_title: string,
        chore_desc: string,
        chore_weight: number,
        //chore_swap_freq
    }
}

export function ViewChore({ chore } : choreDetailsProps) {
    const { chore_id, chore_title, chore_desc, chore_weight } = chore

    useEffect(() => {
        const api = async () => {
            const data = await fetch('http://127.0.0.1:3001/get_user/JDoe', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const jsonData = await data.json();
            console.log(jsonData)
        }

        api()
    }, [])

    return (
        <div className="">
            <br />
            <span><b>Title: </b>{chore_title}</span>
            <br />
            <span><b>Description: </b>{chore_desc}</span>
            <br />
            <span><b>Chore Weight: </b>{chore_weight}</span>
            <br />
        </div>
    )
}
