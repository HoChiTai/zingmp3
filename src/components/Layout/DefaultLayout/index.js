import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
