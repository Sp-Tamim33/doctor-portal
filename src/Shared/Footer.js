import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{ background: `url(${bg})` }}>
            <footer className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 gap-5 py-8 px-6 md:grid-cols-3 text-center">
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase">Company</h2>
                        <ul>
                            <li className="mb-4">
                                <Link to='/home' className=" hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Careers</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Brand Center</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase">Help center</h2>
                        <ul>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Discord Server</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Twitter</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Facebook
                                </Link></li><Link to='/home' className="hover:underline">
                            </Link><li className="mb-4"><Link to='/home' className="hover:underline">
                            </Link><Link to='/home' className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase">Legal</h2>
                        <ul>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Licensing</Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/home' className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-6 px-4 text-center">
                    <span className="text-sm text-center">© 2022 <Link to="home"></Link>. All Rights Reserved
                        <span className='text-secondary font-semibold'> Tamim Ahmed</span>
                    </span>

                </div>
            </footer>
        </div>
    );
};

export default Footer;