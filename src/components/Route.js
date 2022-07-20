 
 // React import not needed as there is no JSX returned

 const Route = ({path, children}) => {
    return window.location.pathname === path ? children : null;
 }

 export default Route;