const getMaterials = async(name, chapter) => {
    $.ajax({
        url: `localhost:5000/api/v1/${name}/${chapter}`,
        method: "GET",
        success: function(response) {
            console.log("success ");
            //console.log(response)
            return response;
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log("error");
            return null;
        }
    });
}


