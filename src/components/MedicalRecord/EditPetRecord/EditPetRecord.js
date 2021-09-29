
import './CreatePetRecord.css';

const EditPetRecord = ({
    history,
}) => {
    return (
        <section className="create-pet-record background-cover">
            <form className="create-pet-record-form" onSubmit={createMedicalRecord}>
                <fieldset>
                    <h3>Create Pet Record</h3>

                    <p className="create-pet-field field-petName">
                        <label htmlFor="petName">Pet Name:</label>

                        <span className="input">
                            <input type="text" name="petName" id="petName" placeholder="Pet Name" />
                            <span className="actions"></span>
                        </span>
                    </p>      

                    <p className="create-pet-field field-gender">
                        <label htmlFor="petGender">Gender:</label>

                        <span className="input">
                            <select type="text" name="petGender">
                                <option value="not-assigned">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="create-pet-field field-birthDate">
                        <label htmlFor="birthday">Birth Date:</label>

                        <input type="date" id="birthDate" name="birthDate" data-date-inline-picker="true" />
                    </p>

                    <p className="create-pet-field field-category" onChange={onCategoryChange}>
                        <label htmlFor="category">Category:</label>

                        <span className="input">
                            <select type="text" name="category">
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
                            <select type="text" name="breed" className="breedDropdown">
                                <option value="not-assigned">Select breed</option>
                                {breeds.map(breed => <option value={breed} key={breed}>{breed}</option>)}
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="create-pet-field field-weight">
                        <label htmlFor="weight">Weight:</label>

                        <span className="input">
                            <input type="text" name="weight" id="weight" placeholder="Weight" />
                            <span className="actions"></span>
                        </span>
                    </p>

                    <div className="create-record-button">
                        <button type="submit" className="form-btn">Create</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default EditPetRecord;