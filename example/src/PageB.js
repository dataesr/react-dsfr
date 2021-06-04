import { useLocation } from 'react-router-dom';

const PageB = () => {
console.debug('==== PageB ==== ', useLocation());
    return <div>PageB #1</div>;
};
export default PageB;