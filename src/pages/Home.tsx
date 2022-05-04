//Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/home.css';

import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../inc/Header'
import SearchBar from '../inc/SearchBar';

export default function Home() {
    return (
        <>
            <Header/>
            <SearchBar/>
            <Container>
                <div className='search_container'>
                    <div className='dictionary_header'>
                        <div className='dictionary_header_title'>
                            <span style={{color:"#4545a2"}}>Günün </span>
                            <span style={{color:"#21325a"}}>Kelimesi</span>
                        </div>
                        <span className='dictionary_header_date' style={{color:"#4545a2"}}>4 Mayıs 2022</span>
                    </div>
                </div>
                
            </Container>
        </>
    )
}
