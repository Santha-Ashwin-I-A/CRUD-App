

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/user/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you really want to deelete record?")){
            $.ajax(request).done(function(response){
                alert("data deleted successfully");
                location.reload();
            })
        }
    })
}