$(document).ready(function () {
    
    $('body').click(function(event) {
        if($(event.target).is('.topic')) {
            console.log();
            var chapter = event.target.innerHTML;
            var name =  $(  $(  $(event.target).parent()[0]  ).parent()[0]).find("h5")[0].innerHTML ;
            // console.log(name + ' is name ');
            // console.log(chapter+ ' is chapter ');
            getMaterialsController( name, chapter);
        }
    });
});


const getMaterialsController = async (name, chapter) => {
    const response = await getMaterials(name,chapter);
    console.log(response);
}