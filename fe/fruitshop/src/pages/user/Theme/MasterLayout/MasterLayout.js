import Footer from "../footer/Footer";
import Header from "../Header/Header";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MasterLayout;