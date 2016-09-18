// $(document).ready(function{
//
// $("form #newproject").on("click","input:submit", function(e){
//   $.ajax({
//        url:'/project/new',
//        type:'post',
//        data:$('#myForm').serialize(),
//        success:function(){
//            alert("worked");
//        }
//    });
//
//
// })
//
//
//
//
//
//
// })
$(document).ready(function() {
  console.log("hihih");

            $("input:submit").on('click', function(event) {
                console.log("hfkjashk");
                event.preventDefault();
                var data = {
                  title: $("#title").val(),
                  description: $("#description").val(),
                  price: $("#price").val(),
                  categorie: $("#categorie").val()
                }
                console.log(data)

                $.ajax({
                    type: "POST",
                    url: "/project",
                    data: data,
                    cache: false,
                    success: function(response){
                      console.log(response)
                    $('#message').prepend( response.title + "<br>"+ response.description + "<br>" + response.price  )
                    }
                });
                // $('#message').prepend( data.title + "<br>"+ data.description + "<br>" + data.price  )
            });
            });
