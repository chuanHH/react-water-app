import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    render(){
        return <div>
            <ul>
                <li><Link to="/detail" replace>详情</Link></li>
                <li><Link to="/about" replace>关于</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}
export default Home