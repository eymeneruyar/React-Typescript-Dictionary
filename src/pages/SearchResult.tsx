//Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/searchResult.css';

import Header from '../inc/Header'
import SearchBar from '../inc/SearchBar'
import { Button, Container, Card, Nav } from 'react-bootstrap';
import { GiSpeaker } from 'react-icons/gi';
import { AiOutlinePrinter, AiOutlineShareAlt } from 'react-icons/ai';
//TODO: Kartlar yazılacak

export default function SearchResult() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Container>
                <div className='word_featured'>
                    <div className='word_featured_wrp white_box'>
                        <div className='word_featured_top'>
                            <div className='word_featured_title'>
                                <h2 style={{margin:"0px"}}>
                                    <span style={{color:"#4545a2",fontWeight:"700",fontSize:"30px"}}>Örnek </span>
                                    sesli dinle
                                </h2>
                                <br/>
                                <a className='dictionary_box_voice cursor_pointer'><GiSpeaker size={20}/></a>
                                <br/>
                            </div>
                            <div className='word_featured_ctr'>
                                <a className='dictionary_box_btn cursor_pointer'>
                                    <span><AiOutlinePrinter size={20}/></span>
                                </a>
                                <a className='dictionary_box_btn cursor_pointer'>
                                    <span><AiOutlineShareAlt size={20}/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='word_desc'>
                    <Card className='word_desc_box col-6'>
                        <Card.Header className='word_desc_top'>
                            find (v)
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='word_header_title'>bulmak</Card.Title>
                            <Card.Text className='word_header_text'>
                                keşfetmek, öğrenmek
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='word_footer_section'>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Anlam</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Örnek Cümle</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    <Card className='word_desc_box col-6'>
                        <Card.Header className='word_desc_top noun'>
                            find (n)
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='word_header_title'>buluş</Card.Title>
                            <Card.Text className='word_header_text'>
                                keşif, buluntu
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='word_footer_section'>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first" className='noun_btn'>Anlam</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Örnek Cümle</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Footer>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
