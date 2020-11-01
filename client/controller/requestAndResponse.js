$(document).ready(function () {
    
    $('body').click(function(event) {
        if($(event.target).is('.topic')) {
            console.log();
            var name = event.target.innerHTML;
            var semester =  $(  $(  $(event.target).parent()[0]  ).parent()[0]).find("h5")[0].innerHTML ;
            // console.log(name + ' is name ');
            getMaterialsController( semester,name);
        }
    });
});



const addTopicsAndMaterials = async (res) => {
    var n = res.length;
    
    window.location.href = './topics.html'
    
    console.log(n);
    
    for(var i=0;i<n;i++){
        console.log('in the loop');
        $(".papers").append(`<a href="#" class="list-group-item list-group-item-action topic"> ${res[i].topic}</a>`);  
    }
}

const getMaterialsController = async (semester,name) => {
    const response = await getMaterials(semester, name);
    console.log(response);
    addTopicsAndMaterials(response.data);
}
