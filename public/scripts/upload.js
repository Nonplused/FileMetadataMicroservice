$('#fileForm').submit(function(e){
  $.ajax( {
    url: '/readfile',
    type: 'POST',
    data: new FormData(this),
    processData: false,
    contentType: false,
    dataType: "json",
    success: function(data, status, jqXHR) {
                alert("File Size: " + data.size);
  }
  })
  e.preventDefault();
});
