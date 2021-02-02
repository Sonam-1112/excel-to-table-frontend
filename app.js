
let data;
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    // File path.
readXlsxFile(fileToLoad).then((rows) => {
    let t =  document.getElementById('data-table');
    t.style.visibility="visible";
    let l = document.getElementsByClassName('showLabel');
    l[0].style.visibility = "hidden";
    data=[];
    rows.map((val) => 
          data.push({name: val[0],roll_no: val[1],class: val[2]})
    )
    console.log(data);
    data.shift();

    $('#data-table').bootstrapTable({
        data
    });
    $('#data-table').attr('data-url',JSON.stringify(data));
   
  })
  }

 function loadFileInDb(){
    $.ajax({
        url: 'https://peaceful-caverns-53517.herokuapp.com/api/addExcelData',
        type: 'post',
        data: {exportedData: data}
    });
}


