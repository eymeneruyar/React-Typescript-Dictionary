//Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/searchResult.css';

import Header from '../inc/Header'
import SearchBar from '../inc/SearchBar'
import { Button, Container } from 'react-bootstrap';
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

                </div>
            </Container>
        </div>
    )
}
