//Import CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../app-assets/header.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { FaLock, FaEnvelope,FaGithub } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineExitToApp } from 'react-icons/md';

//Import other parts
import { useState,useEffect } from 'react'
import { Navbar,Container,Nav,Form,Button,DropdownButton,Dropdown,Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { User, UserResult } from '../models/Users';
import { control, encryptData } from '../services/Util';
import { logout, userAndAdminLogin } from '../services/LogInOutService';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Header() {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeItem, setActiveItem] = useState("Anasayfa");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useNavigate
    const navigate = useNavigate();
    const loc = useLocation();

    // login user
    const [user, setUser] = useState<UserResult | null>()

    // logout
    const [isLogOut, setIsLogOut] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    // login status
    const [loginStatus, setLoginStatus] = useState(false)
    useEffect(() => {
        urlActive()
        const usr = control()
        console.log(usr)
        if (usr !== null) {
            setUser(usr)
            usr.roles!.forEach(item => {
                if(item.name === "ROLE_ADMIN"){
                    setIsAdmin(true);
                }
            })
        }
    }, [loginStatus])

    // url control and menu active
    const urlActive = () => {
        if (loc.pathname === "/") {
            setActiveItem("Ana Sayfa")
        }
        if (loc.pathname === "/resources") {
            setActiveItem("Yardımcı Kaynaklar")
        }
        if (loc.pathname === "/edit") {
            setActiveItem("Düzenle")
        }
        if (loc.pathname === "/waitFoodsList") {
            setActiveItem("Bekleyenler")
        }
    }

    // login fnc
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const fncLogin = () => {

        console.log("fncLogin tetiklendi!")
        if (email == '') {
            toast.warning('Lütfen email alanını doldurunuz!');
        } else if (regemail.test(email) === false) {
            toast.warning('Lütfen geçerli bir email giriniz!')
        } else if (password == '') {
            toast.warning('Lütfen şifre alanını doldurunuz!');
        } else {
            toast.loading("Yükleniyor.")
            userAndAdminLogin(email, password).then(res => {
                const usr: User = res.data
                if (usr.status!) {
                    const userResult = usr.result!
                    // key
                    const key = process.env.REACT_APP_SALT
                    const cryptString = encryptData(userResult, key!)
                    const userAutString = encryptData(res.config.headers, key!)
                    localStorage.setItem("user", cryptString)
                    localStorage.setItem("aut", userAutString)
                    setLoginStatus(usr.status!)
                    //setModalLoginStatus(false)
                    setShow(false);
                }
                toast.dismiss();
            }).catch(err => {
                toast.dismiss();
                toast.error("Bu yetkilerde bir kullanıcı yok!")
            })
        }
    }

    // log out fnc
    const fncLogOut = () => {
        toast.loading("Yükleniyor.")
        logout().then(res => {
            localStorage.removeItem("user")
            setIsLogOut(false)
            setUser(null)
            setLoginStatus(false)
            setIsAdmin(false)
            toast.dismiss();
        }).catch(err => {
            toast.dismiss();
            toast.error("Çıkış işlemi sırasında bir hata oluştu!")
        })
    }

    return (
        <>
            <ToastContainer />
            <Navbar expand = "lg" className='fixed_top'>
                <Container>
                    <Navbar.Brand href="/home">
                        <img src="../img/logo2.png" width="45" className="d-inline-block align-middle mr-2 "/>
                        <span className='navbar_brand_logo'>Dictionary</span>
                    </Navbar.Brand>
                
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/" active = {activeItem === 'Ana Sayfa'}>Ana Sayfa</Nav.Link>
                        <Nav.Link href="/resources" active = {activeItem === 'Yardımcı Kaynaklar'}>Yardımcı Kaynaklar</Nav.Link>
                        {isAdmin === true &&
                            <Nav.Link href="/edit" active = {activeItem === 'Düzenle'}>Düzenle</Nav.Link>
                        }
                        
                    </Nav>
                    {!user &&
                        <>
                            <Button className='btn_login' onClick={handleShow}>
                                <FontAwesomeIcon icon={faCircleUser} style={{marginRight:5}}/>
                                Giriş Yap
                            </Button>
                        </>
                    }
                    {user &&
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className='btn_login_active' id="dropdown-basic">
                                    <FontAwesomeIcon icon={faCircleUser} style={{marginRight:5}}/>
                                    {user.name} {user.surname}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        <span><FiSettings size={20} style={{marginRight:5}}/></span>
                                        Ayarlar
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=> fncLogOut()}>
                                        <span><MdOutlineExitToApp size={20} style={{marginRight:5}}/></span>
                                        Çıkış Yap
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    }
                    
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal_header'>
                    <Modal.Title className='modal_header_title'>ÜYE GİRİŞİ</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal_body'>
                    <Form>
                        <Form.Group className="login_modal_form_box mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                className='login_modal_input'
                                type="email"
                                placeholder="E-Posta Adresi Girin"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className='login_modal_input_icon'><FaEnvelope/></span>
                        </Form.Group>
                        <Form.Group className="login_modal_form_box mb-3" controlId="formBasicPassword">
                            <Form.Control 
                            type="password" 
                            placeholder="Şifre Girin" 
                            className='login_modal_input'
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='login_modal_input_icon'><FaLock/></span>
                        </Form.Group>
                    </Form>
                    <div className='login_form_button'>
                        <a href='#' className='forget_password_link'>Şifremi unuttum</a>
                        <Button className='btn_login' onClick={() => fncLogin()}>Giriş Yap</Button>
                    </div>
                    <div className='or'>
                        <span className='or_txt'>veya</span>
                    </div>
                    <div className='login_options'>
                        <Button className='button_github_login'>
                            <span className='' style={{marginRight:5}}><FaGithub/></span>
                            Github ile Giriş Yap
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modal_footer'>
                    <a href='#' className='modal_footer_signup'>KAYIT OL</a>
                </Modal.Footer>
            </Modal>
        </>
    )
}
