//Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/home.css';

import { Button, Container, Form } from 'react-bootstrap'
import { MdTranslate, MdSearch } from 'react-icons/md';

export default function SearchBar() {
    return (
        <div>
            <Container>
                <div className='subpage_header'>
                    <div className='custom_container'>
                        <div className='subpage_icon'>
                            <span><MdTranslate/></span>
                        </div>
                        <div className='subpage_title'>
                            <h1 style={{fontWeight:800}}>
                                <span style={{opacity: 0.5}}>D++ </span>
                                Sözlük
                            </h1>
                        </div>
                        <p className="subpage_txt">Bir kelime hakkında bilmeniz gereken her şeye tek bir arama ile ulaşın.</p>
                    </div>
                </div>
                <div className='search_container'>
                    <div className='subpage_search'>
                        <Form className='subpage_search_form'>
                            <div className='subpage_search_input_wrp'>
                                <Form.Control type='text' placeholder='Bir kelime ya da cümle girin' className='subpage_search_input'/>
                            </div>
                            <Button className='btn_search'>
                                <span className='button_icon'><MdSearch size={35}/></span>
                            </Button>
                        </Form>
                    </div>
                    <div className='subpage_search_result active'>
                        <ul className='subpage_search_result_list'>
                            <li><a>Örnek1</a></li>
                            <li><a>Örnek2</a></li>
                            <li><a>Örnek3</a></li>
                        </ul>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}
