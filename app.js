const ENDPOINT_URL = "/cgi-bin/post-files.sh";

const ixmlInput = document.querySelector('#ixml');
const dataInput = document.querySelector('#input');
const resultZone = document.querySelector('#result');
const validateBtn = document.querySelector('#run-button');

// SERVER SIDE BUG, THE FORM KEYS ARE IGORED : ONLY THE ORDER OR FIELDS SEEM TO MATTER
const INPUT_FORM_KEY = "grammar.inp";
const IXML_FORM_KEY = "grammar.ixml";

const BLOB_OPTIONS = {
    type: "text/plain"
};

function validateForm() {
    resultZone.innerHTML = "";

    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        if (request.status === 200) {
            resultZone.innerHTML = request.responseText;
        }
    });
    const formData = new FormData();

    const ixmlTextBlob = new Blob([ixmlInput.value], BLOB_OPTIONS);
    formData.append(IXML_FORM_KEY, ixmlTextBlob);

    const inputTextBlob = new Blob([dataInput.value], BLOB_OPTIONS);
    formData.append(INPUT_FORM_KEY, inputTextBlob);

    request.open("POST", ENDPOINT_URL);
    request.send(formData);
}

validateBtn.addEventListener('click', validateForm)
