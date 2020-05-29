function searchByType(type) {
    const url = '{"AnimalType":"'+type+'","AnimalColor":"","AnimalGender":"","AnimalLocation":""}'
    window.location.href='/search_result?userInput='+url
}

function searchByColor(color) {
    const url = '{"AnimalType":"","AnimalColor":"'+color+'","AnimalGender":"","AnimalLocation":""}'
    window.location.href='/search_result?userInput='+url
}

function searchByLocation(location) {
    const url = '{"AnimalType":"","AnimalColor":"","AnimalGender":"","AnimalLocation":"'+location+'"}'
    window.location.href='/search_result?userInput='+url
}

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
            window.alert("Modify animal successfully!")
        },
        error: function (xhr, status, error) {

            alert('Error: ' + error.message);
        }
    });
}

function onModify() {
    var formArray= $("form").serializeArray();
    var data={};
    for (index in formArray){
        data[formArray[index].name]= formArray[index].value;
    }
    console.log(data);
    // const data = JSON.stringify($(this).serializeArray());
    sendAjaxQuery('/animal_detail', data);
    event.preventDefault();
}



