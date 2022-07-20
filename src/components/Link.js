import React from 'react'

const Link = ({className, href, children}) => {

    const onClick = (event) => {

        //to open the link in new window using open in new window
        if(event.metaKey || event.ctrlKey){
            return;
        };

        event.preventDefault();
        window.history.pushState({}, '', href);

        //to  navigate to link
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
    <a onClick={onClick} className={className} href={href}>
        {children}
        </a>
    );
};

export default Link;