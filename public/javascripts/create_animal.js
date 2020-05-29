/**
 *   The function is transforming data from browser input and output
 *
 */

function sendAjaxQuery(url, data) {
    //console.log(data);
    $.ajax({
        url: url ,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            // no need to JSON parse the result, as we are using
            // dataType:json, so JQuery knows it and unpacks the
            // object for us before returning it
            //var ret = dataR;
            // in order to have the object printed by alert
            // we need to JSON stringify the object

            // document.getElementById('results').innerHTML= JSON.stringify(ret);

            // console.log(JSON.stringify(ret))
            //window.location.href='/thankyou_page?id='+ret._id;
            window.alert("Create animal successfully!")
        },
        error: function (xhr, status, error) {

            alert('Error: ' + error.message);
        }
    });
}

function onSubmit() {
    var formArray= $("form").serializeArray();
    var data={};
    for (index in formArray){
        data[formArray[index].name]= formArray[index].value;
    }
    console.log(data);
    // const data = JSON.stringify($(this).serializeArray());
    sendAjaxQuery('/create_animal', data);
    event.preventDefault();
}



$(document).on('change', '.custom-file-input', function (event) {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})



