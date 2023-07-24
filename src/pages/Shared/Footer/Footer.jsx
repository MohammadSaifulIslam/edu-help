import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-black text-white'>
            <footer className="my-container footer mt-24 p-10">
                <div>
                    <span className="footer-title">Social</span>
                    <a href='https://www.facebook.com/khan.saiful.90857/' target='_blank' className="link link-hover">Facebook</a>
                    <a href='https://twitter.com/Saiful6741' target='_blank' className="link link-hover">Twitter</a>
                    <a href='https://www.linkedin.com/in/saiful6741/' target='_blank' className="link link-hover">Linkdin</a>
                    <a href='https://github.com/MohammadSaifulIslam' target='_blank' className="link link-hover">Github</a>
                </div>
                <div>
                    <span className="footer-title">Short Link</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/menu' className="link link-hover">Colleges</Link>
                    <Link to='/blog' className="link link-hover">Admission</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className='text-white'>
                        <Link to='/' className="font-bold text-xl md:text-3xl mb-5" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Edu<span className='text-secondary'>Help</span></Link>
                       
                    </div>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" />
                            <button className="btn bg-secondary absolute top-0 right-0 rounded-l-none ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <hr className='border-white'/>
            <p className='text-center text-white py-4'>@Copiright reserved by EduHelp</p>
        </section>
    );
};

export default Footer;