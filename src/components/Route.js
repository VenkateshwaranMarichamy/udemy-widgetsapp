 
 // React import not needed if there is no JSX returned

 import { useEffect, useState } from "react";

 const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect( () => {
        const onLocationChange = () =>{
            //console.log('location changed');
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () =>{
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;
 }

 export default Route;