$(document).ready(function () {
    var color = 0;
    $('button').click(function () {
        var thingToAddTitle = $('#thingToAddTitle').val();
        var thingToAddContent = $('#thingToAddContent').val();
        $('#list').append('<div class="item c' + color++ % 3 + '">' + '<h2>'+thingToAddTitle+'</h2>' + '<p>'+thingToAddContent+'</p>' + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).remove();
    });
});
