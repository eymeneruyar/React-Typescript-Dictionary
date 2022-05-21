import React, { useState } from 'react'
import '../app-assets/addRemoveFormField.css';

//Import Icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FloatingLabel,Form,Button } from 'react-bootstrap';


export default function AddRemoveFormField(labelName:string) {

    const [serviceList, setServiceList] = useState([{ service: "" }]);

    const handleServiceChange = (e:any, index:number) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index].service = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index:number) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { service: "" }]);
    };

    return (
        <form className="" autoComplete="off">
          <div className="form-field">
            
                {serviceList.map((singleService, index) => (
                    <div key={index} className="services">
                        <div className="first-division">
                            <FloatingLabel controlId="floatingInput" label = {labelName} className="mb-3">
                                <Form.Control 
                                    placeholder={labelName} 
                                    name="service"
                                    type="text"
                                    id="service"
                                    value={singleService.service}
                                    onChange={(e) => handleServiceChange(e, index)}
                                    required    
                                />
                                <div>
                                    {serviceList.length - 1 === index && serviceList.length < 4 && (
                                        <Button type="button" onClick={handleServiceAdd} className="add-btn">
                                            <span>Ekle</span>
                                        </Button>
                                    )}
                                    {serviceList.length !== 1 && (
                                        <Button type="button" onClick={() => handleServiceRemove(index)} className="remove-btn">
                                            <span><RiDeleteBin6Line size={20} />Sil</span>
                                        </Button>
                                    )}
                                </div>
                            </FloatingLabel>
                        </div>
                    </div>
                ))}
            
          </div>
        </form>
      );

}
