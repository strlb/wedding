$(document).ready(function() {
    $(".form-wrapper .button").click(function() {
        var button = $(this);
        var currentSection = button.parents(".section_form");
        var currentSectionIndex = currentSection.index();
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        $(".form-wrapper").submit(function(e) {
            e.preventDefault();
        });

        if (currentSectionIndex === 4) {
            $(document).find(".form-wrapper .section_form").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
    });
    let car_status = 0;
    $('#car_status').click(function() {
        if ($('#r1').prop("checked")) { car_status = 'на машине' };
        if ($('#r2').prop("checked")) { car_status = 'с кем-то' };
        if ($('#r3').prop("checked")) { car_status = 'довезите меня пжлста!' }
        $("#r4").prop("checked", true);
    })
    $('#repid').click(function() {
        $('#name').val('');
        $('#surname').val('');
        $('#your_wish').val('');
        $("#r1").prop("checked", true);
    })
    $('.submit').click(function() {
        let name = $('#name').val();
        let surname = $('#surname').val();
        if ($('#r4').prop("checked")) { day_status = 1 };
        if ($('#r5').prop("checked")) { day_status = 2 };
        let wishes = $('#your_wish').val();
        let request = {
            guest_name: name,
            guest_surname: surname,
            car_status: car_status,
            day_status: day_status,
            guest_wishes: wishes
        }
        $.ajax({
            type: 'POST',
            url: "http://suhovwidding.space/submit.php",
            data: request,
            success: function(response) {
                alert(response);
            },
            error: function() {
                alert(response);
            }
        });
    })
});