import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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

// const showAccordion = () => {
//     if(window.location.pathname === '/'){
//         return <Accordion items={items} />;
//     }
// };

// const showSearch = () => {
//     if(window.location.pathname === '/search'){
//         return <Search  />;
//     }
// };

// const showDropdown = () => {
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown  />;
//     }
// };

// const showTranslate = () => {
//     if(window.location.pathname === '/translate'){
//         return <Translate />;
//     }
// };

const App = () => {

    const [selected, setSelected] = useState(options[0]);
   // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} />
            <Search />
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
            <Dropdown
            label='Select a color' 
            selected={selected} 
            onSelectedChange={setSelected} 
            options={options} /> : null
            }
            <Translate /> */}
            {/* {showAccordion()}
            {showSearch()}
            {showDropdown()}
            {showTranslate()} */}
            <Header />
            <Route path='/'>
                {/* The component inside the parent comp Route will go as children in props */}
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                label='Select a color' 
                selected={selected} 
                onSelectedChange={setSelected} 
                options={options} /> 
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
}

export default App;