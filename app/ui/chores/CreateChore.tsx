'use client'

import { useEffect, useState } from 'react';

export function CreateChore() {
    const [formFields, setFormFields] = useState({
        chore_title: "",
        chore_desc: "",
        chore_weight: 0,
        chore_swap_freq: 0,
    })

    const [message, setMessage] = useState('')


    const createChore = async () => {
        console.log("Made it")
        try {
            const res = await fetch('http://localhost:3001/create_chore', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formFields
                    // chore_title: formFields.chore_title, 
                    // chore_desc: formFields.chore_desc,
                    // chore_weight: formFields.chore_weight,
                    // chore_swap_freq: formFields.chore_swap_freq 
                                }),
            })

            const data = await res.json()

            setMessage(data.message)

            setFormFields({
                chore_title: '',
                chore_desc: '',
                chore_weight: 0,
                chore_swap_freq: 0,
            })
            
        } catch (error) {
            console.error(error)
            setFormFields({
                chore_title: '',
                chore_desc: '',
                chore_weight: 0,
                chore_swap_freq: 0,
            })
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            createChore()
        }}
        
        >
            <div>
                <div>
                    <label>
                        Title: <input 
                        id="chore_title" 
                        value={formFields.chore_title} 
                        onChange={(e) => {
                            setFormFields((currentState) => ({ ...currentState, chore_title: e.target.value }))
                        }} 
                        name='chore_title' />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Description: <input 
                        id="chore_desc"
                        value={formFields.chore_desc}
                        onChange={(e) => {
                            setFormFields((currentState) => ({ ...currentState, chore_desc: e.target.value }))
                        }}  
                        name="chore_desc" />
                    </label>
                </div>    
                <br />
                <div>
                    <label>
                        Weight: <input
                        id="chore_weight"
                        value={formFields.chore_weight}
                        onChange={(e) => {
                            setFormFields((currentState) => ({ ...currentState, chore_weight: Number(e.target.value) }))
                        }}  
                        name="chore_weight" />
                    </label>
                </div>    
                <br />
                <div>
                    <label>
                        Swap Frequency: <input 
                        id="chore_swap_freq"
                        value={formFields.chore_swap_freq}
                        onChange={(e) => {
                            setFormFields((currentState) => ({ ...currentState, chore_swap_freq: Number(e.target.value) }))
                        }} 
                        name="chore_swap_freq" />
                    </label>      
                </div>          
            </div>
            <br />
            <div>
                <button type="button" onClick={createChore} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded text-2xl'>+</button>
            </div>
        </form>
    )
}