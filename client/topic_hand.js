$(document).ready(()=>{
    console.log(window.location.search);
    function getQueryParams() {
        let result = {};
        let params = window.location.search;
        params = params.substr(1);
        let queryParamArray = params.split('&');
        queryParamArray.forEach(function(queryParam) {
          let item = queryParam.split("=");
          result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
      }
      const result = getQueryParams();
      const info = get_info(result.chapter,result.semester);
     
});
const get_info = async function(chapter,semester){
    const info = await getMaterials(semester,chapter);
     $('container > p').html(`${semester} | ${chapter}`);
     for(var i=0;i<info.data.length;i++){
       
        $(".accordion").append(`
        <div class="card">
          <div class="card-header" id="heading${i}">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                ${info.data[i].topic}
              </button>
            </h2>
          </div>
      
          <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
            <div class="card-body">
              File
            </div>
            <hr>
            <div class="card-body">
              File
            </div>
            <hr>
            <div class="card-body">
              File
            </div>
            <hr>
            <div class="card-body">
              File
            </div>
          </div>
        </div>
        `);
     }
}