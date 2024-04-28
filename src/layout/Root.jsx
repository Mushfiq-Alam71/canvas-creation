import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="lg:mx-20 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;