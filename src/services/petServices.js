import { database, storage } from "../utils/firebase";

// API SERVICES

export const getAllBreeds = (category) => {
    if (category === 'Dog') {
        return fetch('https://api.theDogAPI.com/v1/breeds')
            .then(res => res.json())
            .catch(err => console.log(err))
    } else if (category === 'Cat') {
        return fetch('https://api.thecatapi.com/v1/breeds')
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}

// DB SERVICES

export const uploadPetImage = (e, userId, getRecordIdValue) => {
    const uploadTask = storage.ref(`medicalRecordsImages/${getRecordIdValue}/${e.target.files[0].name}`).put(e.target.files[0]);

    uploadTask.on(
        "state_changed",
        snapshot => {
            console.log(snapshot.state);
        },
        error => {
            console.log(error);
        },
        () => {
            storage
                .ref(`medicalRecordsImages/${getRecordIdValue}`)
                .child(e.target.files[0].name)
                .getDownloadURL()
                .then(url => {
                    document.querySelector('#pet-profile-pic').src = url;
                    updateDbRecord(userId, getRecordIdValue, {'editName': 'imageUrl', 'editValue': url})
                })
        }
    )
}

export const createDbRecord = (userId, petName, petGender, birthDate, category, breed, weight) => {
    const userRef = database.ref(userId);
    const newRecord = userRef.push();

    newRecord.set({
        petName,
        petGender,
        birthDate,
        category,
        breed,
        weight,
        'allergies': 'None',
        'existingConditions': 'None',
    })
}

export const updateDbRecord = (userId, getRecordIdValue, currEditValue) => {
    const recordRef = database.ref(userId).child(getRecordIdValue);

    recordRef.update({
        [currEditValue.editName]: currEditValue.editValue
    });
}

export const deleteDbRecord = (e, userId, petRecordId) => {
    if (petRecordId === 'not-assigned') {
        return;
    }

    const recordRef = database.ref(userId).child(petRecordId);

    recordRef.remove();
}

// MEDICAL RECORD SERVICES

export const onEdit = (e) => {
    let currEditValue = e.target.parentElement.querySelector('p span').innerText;

    if (e.target.value === 'weight-edit') {
        currEditValue = Number(currEditValue.replace('kgs', '').trim());
    }

    const editInput = document.querySelector(`#${e.target.value}`);
    const editWrapper = editInput.parentElement;

    editInput.value = currEditValue;

    if (editWrapper.style.display === "block") {
        editWrapper.style.display = "none"
    } else {
        editWrapper.style.display = "block"
    }
}

export const onEditConfirm = (e, userId, getRecordIdValue) => {
    const editWrapper = e.target.parentElement;
    const editField = editWrapper.children[0];

    const editInfo = {
        'editName': editField.name,
        'editValue': editField.value
    }

    updateDbRecord(userId, getRecordIdValue, editInfo);

    editWrapper.style.display = "none";
    return editField.value;
}

export const onAttachChange = (e, userId, getRecordIdValue) => {
    if (e.target.files[0]) {
        uploadPetImage(e, userId, getRecordIdValue);
    } 
}