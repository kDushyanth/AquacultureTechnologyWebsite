$(document).ready(function () {
    
    $('body').click(function(event) {
        if($(event.target).is('.topic')) {
            console.log();
            var name = event.target.innerHTML;
            var semester =  $(  $(  $(event.target).parent()[0]  ).parent()[0]).find("h5")[0].innerHTML ;
            window.location.href='/topics.html?semester='+semester+'&chapter='+name;
            
        
        }
        if($(event.target).is('.about')) {
            $("html, body").animate({scrollTop : $(`#aboutus`).offset().top - 50}, 500)
        }
    });
    $("#submit").click((event)=>{
        //event.preventDefault();
        const name = $('#name').val().trim();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const text = $('#text').val().trim();
        
        if(name!='' && email!='' && subject!='' && text!=''){
        var mail_content = JSON.stringify({name,phone,email,subject,text});
        mailer(mail_content);
        }
    });
});
async function mailer(mail_content)  {
  const res = await email(mail_content);
  console.log(res);
  alert("Message sent!");
}

