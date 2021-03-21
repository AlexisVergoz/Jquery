$(function () {
    // On déclare les variable
    let $list, $newItemForm;
    // On séléctionne les "ul" dans la variable list
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    // On crée une liste d'évènement
    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        let text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
    });

    $list.on('click', 'li', function () {
        let $this = $(this);
        $this.remove();
    });

});