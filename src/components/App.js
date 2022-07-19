import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework.'
    }, {
        title: 'Why use React?',
        content: 'React is favourite JC framework among engineers.'
    }, {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }

];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} />
            <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected} 
            options={options} /> : null
}
        </div>
    );
}

export default App;