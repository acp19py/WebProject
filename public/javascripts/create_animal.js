/**
 *   The function is transforming data from browser input and output
 *
 */
function sendAjaxQuery(url, data) {
    $.ajax({
        url: url ,
        data: data,
        dataType: 'json',
        type: 'POST',
        processData: false,
        contentType: false,
        success: function (dataR) {
            // no need to JSON parse the result, as we are using
            // dataType:json, so JQuery knows it and unpacks the
            // object for us before returning it
            var ret = dataR;
            // in order to have the object printed by alert
            // we need to JSON stringify the object
            window.location.href='/animal_detail?id='+ret._id;

        },
        error: function (xhr, status, error) {

            alert('Error: ' + error.message);
        }
    });
}

function onSubmit() {
    event.preventDefault();
    event.stopImmediatePropagation();
    var myForm = document.getElementById('xForm');
    var formData = new FormData(myForm);
    sendAjaxQuery('/create_animal', formData);
    window.alert("Release successfully!")
    return false;
}


function showFilename(file){
    $("#filename_label").html(file.name);
}
