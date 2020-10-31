const getMaterials = async(name, chapter) => {
    var res  = null;
    await $.ajax({
        url: `http://localhost:5000/api/v1/${name}/${chapter}`,
        method: "GET",
        success: function(response) {
            console.log("success ");
            // console.log(response)
            res =  response;
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log(xhr);
            console.log("error");
            return null;
        }
    });
    return res;
}

const postMaterials = async(chapter="FISH NUTRITION AND FEED TECHNOLOGY", name="PRACTICALS") => {
    var res  = null;
    var data = {
        "paper" : "www.google.com",
        "topic" : "Protein deficiency, vitamin and mineral deficiency symptoms"
    };
    $.ajax({
        url: `http://localhost:5000/api/v1/${name}/${chapter}`,
        method: 'PUT',
        data : JSON.stringify(data),
        dataType: 'json',
        async : false,
        success: function(response) {
            console.log("success ");
            console.log(response)
            res =  response;
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log(xhr);
            console.log("error");
            return null;
        }
    });
    return res;
}

