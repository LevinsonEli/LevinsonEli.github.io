
$("ul").on("click", "li", function()
{
	$(this).toggleClass("completed");
});


$("ul").on("click", ".delete", function(event)
{
	$(this).parent().fadeOut(500, function()
		{
			$(this).remove();
		});
	event.stopPropagation(); // Stop Bubbling
});

$("input[type='text']").on("keypress", function(event)
{
	if (event.which == 13)	// 'Enter' key
	{
		if($(this).val() != "")
		{
			var str = $(this).val();
			if ( $(this).val().length > 30)
			{
				str = $(this).val().slice(0, 30);
				str += "...";
			}
			$("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> "
						+ str + "</li>");
			$(this).val("");
		}
	}
	event.stopPropagation(); // Stop Bubbling
});

$(".fa-plus").on("click", function()
{
	$("input[type='text']").fadeToggle();
})

