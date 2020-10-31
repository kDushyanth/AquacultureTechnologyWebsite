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


const getMaterialsController = async (semester,name) => {
    const response = await getMaterials(semester, name);
    console.log(response);
}