import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

/*Этот конт компонент нужен нам, чтобы делать запрос, т.к. презантационный компонент не должен связываться с внешним миром. Но чтобы получить доступ к store нам нужен коннект и для этого мы эту компоненту еще им обернём в конце файла*/

class HeaderContainer extends React.Component {


    render() {

        return <Header {...this.props} />
    }

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
