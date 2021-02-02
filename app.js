
let data;

var files = document.getElementById('fileToLoad');
var load = document.getElementById('load');
var save = document.getElementById('save');

files.addEventListener("change", function () {
  
    load.disabled = false;
    data=[];

    });

function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    // File path.
readXlsxFile(fileToLoad).then((rows) => {
    let t =  document.getElementById('data-table');
    t.style.visibility="visible";
    let l = document.getElementsByClassName('showLabel');
    l[0].style.visibility = "hidden";
    // document.getElementById('fileToLoad').value = null;

    data=[];
    rows.map((val) => 
          data.push({name: val[0],roll_no: val[1],class: val[2]})
    )
    console.log(data);
    data.shift();

    $('#data-table').bootstrapTable({
        data
    });
    $('#data-table').attr('data-url',JSON.stringify(data))
    })
    save.disabled = false;

    load.disabled = true;
    console.log(files.value)
    files.value = '';
    $("#fileToLoad").val('');
  }

 function loadFileInDb(){
    $.ajax({
        url: 'https://peaceful-caverns-53517.herokuapp.com/api/addExcelData',
        type: 'post',
        data: {exportedData: data}
    });
    save.disabled = true;

    alert("Saved data to databse");

}


