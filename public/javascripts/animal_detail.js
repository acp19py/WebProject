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