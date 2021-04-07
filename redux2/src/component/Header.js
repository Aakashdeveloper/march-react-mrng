import React from 'react';
import {Link} from 'react-router-dom';
import BaseButton from './BaseButton';

const Header = () => {
    return(
        <header>
            <div>
                <BaseButton/>
                <Link to="/">News Redux</Link>
            </div>
        </header>
    )
}

export default Header;