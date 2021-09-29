import { useState, useContext } from 'react';

import { getAllBreeds, createDbRecord } from '../../../services/petServices';
import AuthContext from '../../../contexts/AuthContext';
import { showErrorMessage } from '../../../services/common';

import './CreatePetRecord.css';

const CreatePetRecord = ({
    history,
}) => {
    const [breeds, setBreeds] = useState([]);
    const { userId } = useContext(AuthContext);

    const onCategoryChange = (e) => {
        let category = e.target.value;

        if (category === 'not-assigned') {
            return setBreeds([]);
        }

        getAllBreeds(category)
            .then((result) => result.map(obj => obj.name))
            .then(breedsNames => setBreeds(breedsNames))
            .catch(err => console.log(err))
    }

    const createMedicalRecord = (e) => {
        e.preventDefault();

        const { petName, petGender, birthDate, category, breed, weight } = e.target;

        const formattedBirthDate = new Date(Date.parse(birthDate.value.replace(/-/g, " ")));
        const todaysDate = new Date();
        
        if (formattedBirthDate > todaysDate) {
            return showErrorMessage('Please check the Birth Date!');
        }

        if (petGender.value === 'not-assigned' || category.value === 'not-assigned' || breed.value === 'not-assigned') {
            return showErrorMessage('Please fill all the fields!');
        }
        
        createDbRecord(userId, petName.value, petGender.value, birthDate.value, category.value, breed.value, weight.value);

        history.push('/Healthy-Paw/medical-record');
    }

    return (
        <section className="create-pet-record background-cover">
            <form className="create-pet-record-form" onSubmit={createMedicalRecord}>
                <fieldset>
                    <h3>Create Pet Record</h3>

                    <p className="create-pet-field field-petName">
                        <label htmlFor="petName">Pet Name:</label>

                        <span className="input">
                            <input type="text" name="petName" id="petName" placeholder="Pet Name" required/>
                            <span className="actions"></span>
                        </span>
                    </p>      

                    <p className="create-pet-field field-gender">
                        <label htmlFor="petGender">Gender:</label>

                        <span className="input">
                            <select type="text" name="petGender" required>
                                <option value="not-assigned">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="create-pet-field field-birthDate">
                        <label htmlFor="birthday">Birth Date:</label>

                        <input type="date" id="birthDate" name="birthDate" data-date-inline-picker="true" required/>
                    </p>

                    <p className="create-pet-field field-category" onChange={onCategoryChange}>
                        <label htmlFor="category">Category:</label>

                        <span className="input">
                            <select type="text" name="category" required>
                                <option value="not-assigned">Select category</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="create-pet-field field-breed" >
                        <label htmlFor="breed">Breed:</label>

                        <span className="input">
                            <select type="text" name="breed" className="breedDropdown" required>
                                <option value="not-assigned">Select breed</option>
                                {breeds.map(breed => <option value={breed} key={breed}>{breed}</option>)}
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="create-pet-field field-weight">
                        <label htmlFor="weight">Weight:</label>

                        <span className="input">
                            <input type="number" name="weight" id="weight" placeholder="Weight" required/>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <div className="error-wrapper">
                        <div className="error-message">ASD</div>
                    </div>

                    <div className="create-record-button">
                        <button type="submit" className="form-btn">Create</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default CreatePetRecord;