//Import Other Library
import React, {useState} from 'react'
import { Container,Card,Nav,Form, FloatingLabel, ButtonGroup, Button } from 'react-bootstrap'
import Header from '../inc/Header'
import AddRemoveFormField from '../inc/AddRemoveFormField';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataTableColumn } from '../models/Words';

//Import CSS Folder
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app-assets/edit.css';


export default function Edit() {

    //Initialize States
    const [wordName, setWordName] = useState('');
    const [wordType, setWordType] = useState('');
    const [wordMean, setWordMean] = useState('');
    const [wordSynonyms, setWordSynonyms] = useState('');
    const [wordSentence, setWordSentence] = useState('');

    let turkishMeans = AddRemoveFormField("Türkçe Anlamı");
    let synonyms = AddRemoveFormField("Eş Anlamlısı");
    let sentences = AddRemoveFormField("Örnek Cümle");
    var boxColor = setBoxHeaderColor(wordType);

    const columns: TableColumn<DataTableColumn>[] = [
        {
            name: 'Kelime Türü',
            selector: row => row.wordType,
        },
        {
            name: 'Kelime Adı',
            selector: row => row.name,
        },
        {
            name: 'Kelime Anlamı',
            selector: row => row.turkishMean,
        },
        {
            name: 'Eş Anlam',
            selector: row => row.synonyms,
        },
        {
            name: 'Örnek Cümle',
            selector: row => row.sentence,
        },
    ];
    
    const data = [
        {
            wordType: 'Noun',
            name: 'Computer',
            turkishMean: 'Bilgisayar',
            synonyms: '',
            sentence: 'I am using computer now.'
        }
    ]

    return (
        <div>
            <Header/>
            <Container>
                <div className='page_title'>
                    <h1>Kelime Ekle/Düzenle</h1>
                </div>
                <div className='word_properties_container'>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                                <FloatingLabel label="Kelimenin Adı" className="mb-3">
                                    <Form.Control placeholder="Kelimenin Adı" />
                                </FloatingLabel>
                                <FloatingLabel label="Kelimenin Türü">
                                    <Form.Select aria-label="Floating label select example" onChange={(e) => setWordType(e.target.value)}>
                                        <option>Lütfen bir seçim yapınız</option>
                                        <option value="v">Verb</option>
                                        <option value="n">Noun</option>
                                        <option value="adj">Adjective</option>
                                        <option value="pv">Phrasal Verb</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                                {turkishMeans}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                                {synonyms}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                                {sentences}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Header className='word_desc_top' style={{backgroundColor:boxColor}}>
                            find (n)
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='word_header_title'>buluş</Card.Title>
                            <Card.Text className='word_header_text'>
                                keşif, buluntu
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='word_footer_section'>
                            <div className='row'>
                                <Nav variant="pills" defaultActiveKey="#first" className='col-6' style={{justifyContent:'center'}}>
                                    <Nav.Item>
                                        <Nav.Link href="#first" className='noun_btn'>Anlam</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link" className='noun_btn'>Örnek Cümle</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <ButtonGroup className='col-3'>
                                    <Button className='save_btn'>Kaydet</Button>
                                </ButtonGroup>
                                <ButtonGroup className='col-3'>
                                    <Button className='clear_btn'>Temizle</Button>
                                </ButtonGroup>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
                <DataTable columns={columns} data={data}/>
            </Container>
        </div>
    )
}

function setBoxHeaderColor(wordType:string){
    console.log("Renk ayarlama fonksiyonuna girdi." + wordType);
    var color = '#3598e8';
    if('v' == wordType){
        color = '#3598e8';
    }else if('n' == wordType){
        color = '#8644a1';
    }else if('adj' == wordType){
        color = '#3498e8';
    }else{
        color = '#3598e8';
    }
    return color;
}