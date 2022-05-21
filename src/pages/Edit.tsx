import React from 'react'
import { Container,Card,Button,Form, FloatingLabel } from 'react-bootstrap'
import '../app-assets/edit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../inc/Header'
import AddRemoveFormField from '../inc/AddRemoveFormField';

export default function Edit() {



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
                            <AddRemoveFormField/>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='word_properties_box'>
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </Container>
        </div>
    )
}
