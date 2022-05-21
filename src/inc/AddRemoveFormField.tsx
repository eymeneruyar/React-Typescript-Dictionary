import React, { useState } from 'react'
import '../app-assets/addRemoveFormField.css';

//Import Icons
import { RiDeleteBin6Line } from 'react-icons/ri';


export default function AddRemoveFormField() {

    const [serviceList, setServiceList] = useState([{ service: "" }]);

    const handleServiceChange = (e:any, index:number) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        //list[index][name] = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index:any) => {
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
            <label htmlFor="service">Service(s)</label>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services">
                <div className="first-division">
                  <input
                    name="service"
                    type="text"
                    id="service"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                  {serviceList.length - 1 === index && serviceList.length < 4 && (
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className="add-btn"
                    >
                      <span>Add a Service</span>
                    </button>
                  )}
                </div>
                <div className="second-division">
                  {serviceList.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(index)}
                      className="remove-btn"
                    >
                      <span><RiDeleteBin6Line size={20} /></span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </form>
      );

}
