$(document).ready(function() {
    $('.popover li input[type=checkbox]:checked').click(function() {
        var names_amenities = [];
        $('input:checked').each(function() {
            names_amenities.push(this.id);
        });
        console.log(names_amenities);
    });
});
