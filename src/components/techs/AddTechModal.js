import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(false);
    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter a first and lastname'})
        }else{
            // Clear Fields
            setFirstName('')
            setLastName('')
        }
    }
    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstname' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="firstname" className='active'>
                            FirstName
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="lastName" className='active'>
                            LastName
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className='modal-close waves-effect blue waves-green btn'>Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal;
