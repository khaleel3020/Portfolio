import React from 'react';
const Footer =()=>{
    const date=new Date().getFullYear()
    return(<>
        <footer className='footer bg-light text-center'>
<p> @{date} Khaleel's portfolio</p>
        </footer>
    </>)
}

export default Footer;