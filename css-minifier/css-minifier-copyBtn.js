$(function () {
    $('#copy-to-clipboard').click(function (ev) {
        ev.preventDefault();
        $('#tool-implementation textarea').select();
        document.execCommand('copy');
    });
});  
