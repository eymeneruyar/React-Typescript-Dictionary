//Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/home.css';

import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Header from '../inc/Header'
import { MdTranslate, MdSearch } from 'react-icons/md';


export default function Home() {
    return (
        <>
            <Header/>
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
                </div>
                
            </Container>
        </>
    )
}
