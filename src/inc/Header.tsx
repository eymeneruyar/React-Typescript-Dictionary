//Import CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/header.css';
//Import other parts
import { useState } from 'react'
import { Navbar,Container,Nav,Form,Button,Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { FaLock, FaEnvelope,FaGithub } from 'react-icons/fa';



export default function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand = "lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="../img/logo2.png" width="45" className="d-inline-block align-middle mr-2 "/>
                        <span className='navbar_brand_logo'>Dictionary</span>
                    </Navbar.Brand>
                
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="#home">Ana Sayfa</Nav.Link>
                        <Nav.Link href="#pricing">Yardımcı Kaynaklar</Nav.Link>
                    </Nav>
                    <Button className='btn_login' onClick={handleShow}>
                        <FontAwesomeIcon icon={faCircleUser} style={{marginRight:5}}/>
                        Giriş Yap
                    </Button>
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
                            />
                            <span className='login_modal_input_icon'><FaEnvelope/></span>
                        </Form.Group>
                        <Form.Group className="login_modal_form_box mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Şifre Girin" className='login_modal_input'/>
                            <span className='login_modal_input_icon'><FaLock/></span>
                        </Form.Group>
                    </Form>
                    <div className='login_form_button'>
                        <a href='#' className='forget_password_link'>Şifremi unuttum</a>
                        <Button className='btn_login'>Giriş Yap</Button>
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
