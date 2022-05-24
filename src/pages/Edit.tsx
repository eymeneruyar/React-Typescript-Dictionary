import React from 'react'
import { Container,Card,Nav,Form, FloatingLabel } from 'react-bootstrap'
import '../app-assets/edit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../inc/Header'
import AddRemoveFormField from '../inc/AddRemoveFormField';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataTableColumn } from '../models/Words';

export default function Edit() {

    let turkishMeans = AddRemoveFormField("Türkçe Anlamı");
    let synonyms = AddRemoveFormField("Eş Anlamlısı");
    let sentences = AddRemoveFormField("Örnek Cümle");

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
                                <FloatingLabel controlId="floatingInput" label="Kelimenin Adı" className="mb-3">
                                    <Form.Control placeholder="Kelimenin Adı" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSelect" label="Kelimenin Türü">
                                    <Form.Select aria-label="Floating label select example">
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
                        <Card.Header className='word_desc_top'>
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
                                    <Nav.Link href="#link" className='noun_btn'>Örnek Cümle</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Footer>
                    </Card>
                </div>
                <DataTable columns={columns} data={data}/>
            </Container>
        </div>
    )
}
