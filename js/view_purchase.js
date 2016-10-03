/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        // Nannette Thacker http://www.shiningstar.net
        function confirmSubmit() {
            var agree = confirm("Are you sure you wish to Delete this Entry?");
            if (agree)
                return true;
            else
                return false;
        }

        function confirmDeleteSubmit() {
            var flag = 0;
            var field = document.forms.deletefiles;
            for (i = 0; i < field.length; i++) {
                if (field[i].checked == true) {
                    flag = flag + 1;

                }

            }
            if (flag < 1) {
                alert("You must check one and only one checkbox!");
                return false;
            } else {
                var agree = confirm("Are you sure you wish to Delete Selected Record?");
                if (agree)

                    document.deletefiles.submit();
                else
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
  
  $(document).ready(function()
{
$("#checkall").live('click',function(event){
$('input:checkbox:not(#checkall)').attr('checked',this.checked);
//To Highlight
if ($(this).attr("checked") == true)
{
//$(this).parents('table:eq(0)').find('tr:not(#chkrow)').css("background-color","#FF3700");
$("#tblDisplay").find('tr:not(#chkrow)').css("background-color","#DCDCDC");
}
else
{
//$(this).parents('table:eq(0)').find('tr:not(#chkrow)').css("background-color","#fff");
$("#tblDisplay").find('tr:not(#chkrow)').css("background-color","#DCDCDC");
}
});
$('input:checkbox:not(#checkall)').live('click',function(event)
{
if($("#checkall").attr('checked') == true && this.checked == false)
{
$("#checkall").attr('checked',false);
$(this).closest('tr').css("background-color","#ffffff");
}
if(this.checked == true)
{
$(this).closest('tr').css("background-color","#DCDCDC");
CheckSelectAll();
}
if(this.checked == false)
{
$(this).closest('tr').css("background-color","#ffffff");
}
});

function CheckSelectAll()
{
var flag = true;
$('input:button:not(#checkall)').each(function() {
if(this.checked == false)
flag = false;
});
$("#checkall").attr('checked',flag);
}
});
$(document).ready(function() {
$('#cancelall').click(function() {
location.reload();
});
});  
  
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



