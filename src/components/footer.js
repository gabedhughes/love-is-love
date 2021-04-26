import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p>Copyright &copy; 2021 Gabe Hughes and Vista Ridge Drama Club. All Rights Reserved</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
)

export default Footer;