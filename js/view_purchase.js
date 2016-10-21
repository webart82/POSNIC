/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        // Nannette Thacker http://www.shiningstar.net
	function deleteall()
{

//var info = 'id=' + movies2;
//var jsonString = JSON.stringify(movies2);
//alert(movies2[0]);
var file1="viewpurchase";
if(confirm("Are you sure you want to delete all records...?"))
{
 $.ajax({
   type: "POST",
   url: "deleteall.php",
   data: {data : file1},
   cache: false,
   success: function(){
sessionStorage.removeItem('checked-checkboxesviewpurchase');
//sessionStorage.removeItem('checked-checkboxesviewsales');
 window.location.href = "view_purchase.php";
 }
});
  $(this).parents(".show").animate({ backgroundColor: "#003" }, "slow")
  .animate({ opacity: "hide" }, "slow");
 }
return false;	 

}
	
		var arrCheckedCheckboxes1viewpurchase = [];



function rowselection() {

    if (sessionStorage.getItem('checked-checkboxesviewpurchase') && $.parseJSON(sessionStorage.getItem('checked-checkboxesviewpurchase')).length !== 0)
    {
        arrCheckedCheckboxes1viewpurchase = $.parseJSON(sessionStorage.getItem('checked-checkboxesviewpurchase'));
        //Convert checked checkboxes array to comma seprated id
        $(arrCheckedCheckboxes1viewpurchase.toString()).prop('checked', true);
		
    }
  
}

$(document).ready( function() {
	
	rowselection();
	
	 $("input:checkbox").change(function() {
			// i++;
		//	var arrCheckedCheckboxes1viewpurchase = [];
			//alert(arrCheckedCheckboxes);
			// Get all checked checkboxes
			var currentId = $(this).attr('id');
			if ($(this).is(':checked')) {
				arrCheckedCheckboxes1viewpurchase.push("#" + currentId);
			}else {
				console.log('came to else condition');
				arrCheckedCheckboxes1viewpurchase = jQuery.grep(arrCheckedCheckboxes1viewpurchase, function(value) {
				  return value != "#" + currentId;
				});
				
			}
			 sessionStorage.setItem('checked-checkboxesviewpurchase', JSON.stringify(arrCheckedCheckboxes1viewpurchase));	
			
			// Convert checked checkboxes array to JSON ans store it in session storage
		   
			
			
			
		});

});
		
        function confirmSubmit() {
            var agree = confirm("Are you sure you wish to Delete this Entry?");
            if (agree)
                return true;
            else
                return false;
        }

function confirmDeleteSubmit() {
				var retrievedData = sessionStorage.getItem("checked-checkboxesviewpurchase");
	   var movies2 = JSON.parse(retrievedData);  
           
		   var flag =movies2.length;
		   
		  // alert(flag);
            /*var field = document.forms.deletefiles;
            for (i = 0; i < field.length; i++) {
                if (field[i].checked == true) {
                    flag = flag + 1;

                }

            }*/
            if (flag ==0) {
                alert("You must check one and only one checkbox!");
                return false;
            } else {
				
                var agree = confirm("Are you sure you wish to Delete Selected Record.?");
                if (agree)

                
{
	var file1="viewpurchase";
 $.ajax({
   type: "POST",
   url: "deleterecords.php",
   data: {data : movies2,file : file1},
   cache: false,
   success: function(){
sessionStorage.removeItem('checked-checkboxesviewpurchase');
 window.location.href = "view_purchase.php";
 }
});
  $(this).parents(".show").animate({ backgroundColor: "#003" }, "slow")
  .animate({ opacity: "hide" }, "slow");
 }
  return false;
               

            }
        }        

		function confirmLimitSubmit() {
            if (document.getElementById('search_limit').value != "") {

                document.limit_go.submit();

            } else {
                return false;
            }
        }


        function checkAll() {

            var field = document.forms.deletefiles;
            for (i = 0; i < field.length; i++)
                field[i].checked = true;
        }

        function uncheckAll() {
            var field = document.forms.deletefiles;
            for (i = 0; i < field.length; i++)
                field[i].checked = false;
        }
  
        /*$.validator.setDefaults({
         submitHandler: function() { alert("submitted!"); }
         });*/
        $(document).ready(function () {

            // validate signup form on keyup and submit
            $("#form1").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 200
                    },
                    address: {
                        minlength: 3,
                        maxlength: 500
                    },
                    contact1: {
                        minlength: 3,
                        maxlength: 20
                    },
                    contact2: {
                        minlength: 3,
                        maxlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "Please enter a supplier Name",
                        minlength: "supplier must consist of at least 3 characters"
                    },
                    address: {
                        minlength: "supplier Address must be at least 3 characters long",
                        maxlength: "supplier Address must be at least 3 characters long"
                    }
                }
            });

        });



