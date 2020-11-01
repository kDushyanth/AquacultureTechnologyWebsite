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
    $("#submit").click((event)=>{
        event.preventDefault();
        const name = $('#name').val().trim();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const text = $('#text').val().trim();

        var mail_content = JSON.stringify({name,phone,email,subject,text});
        mailer(mail_content);
        
    });
});
async function mailer(mail_content)  {
  const res = await email(mail_content);
  console.log(res);
}


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
