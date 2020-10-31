const getMaterials = async(semester, chapter) => {
    var res  = null;
    await $.ajax({
        url: `http://localhost:5000/api/v1/${semester}/${chapter}`,
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

const postMaterials = async (semester, chapter, topic, url) => {
    var res  = null;
    var data = {
        "paper" : url,
        "topic" : topic
    };
    $.ajax({
        url: `http://localhost:5000/api/v1/${semester}/${chapter}`,
        method: 'PUT',
        data : JSON.stringify(data),
        contentType: 'application/json',
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

