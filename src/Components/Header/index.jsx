import React from 'react';

function Header() {
    const handleChange = event => {
        // console.log(event.target.value);
        localStorage.setItem('AppLanguage', event.target.value);
        window.location.reload();
    }
    let lang = localStorage.getItem('AppLanguage') || 'en'; // set bydefault english
    return (
        <nav className='my-4'>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2">
                    <select className='form-select' onChange={handleChange} value={lang}>
                        {/* <option selected>select Language...</option> */}
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="ur">Urdu</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Header;