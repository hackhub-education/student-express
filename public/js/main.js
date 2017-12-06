$('#deleteStudent').click(function(){
  const studentId = $(this).attr('studentId');
  $.ajax({
    type:'POST',
    url:'/students/delete',
    data:{ studentId },
    success: function(res){
      if(res.result === 'success'){
        location.href = '/'
      }     
    }
  });
})