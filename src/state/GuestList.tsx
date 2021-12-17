import React, { useState } from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setGuests([...guests, name]);
        setName('');
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map( name => {
                return <li>name</li>
            })}
        </ul>
        {guests}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export { GuestList };