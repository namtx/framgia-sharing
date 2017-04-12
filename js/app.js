$(document).ready(function(){
  $('#sync-btn').click(function(){
    $.ajax({
      url: '/',
      type: 'GET',
      success: function(data){
        console.log(data)
      },
      async: false
    })
    console.log('request done!')
  })

  $('#async-btn').click(function(){
    $.ajax({
      url: '/',
      type: 'GET',
      success: function(data){
        console.log(data)
      },
    })
    console.log('request done!')
  })
})
