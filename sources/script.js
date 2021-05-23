function showMyModalSetTitle0(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal00').modal('show');
        playSound();
}
function showMyModalSetTitle1(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal01').modal('show');
        playSound1();
}
function showMyModalSetTitle2(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal02').modal('show');
        playSound2();
}
function showMyModalSetTitle3(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal03').modal('show');
        playSound3();
}
function showMyModalSetTitle4(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal04').modal('show');
        playSound4();
}
function showMyModalSetTitle5(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal05').modal('show');
        playSound5();
}
function showMyModalSetTitle6(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal06').modal('show');
        playSound6();
}
function showMyModalSetTitle7(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal07').modal('show');
        playSound7();
}
    function showMyModalSetTitle8(myTitle, myBodyHtml) {
        $('#myModalTitle').html(myTitle);
        $('#myModalBody').html(myBodyHtml);
        $('#myModal08').modal('show');
        playSound8();
        $(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(choice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
           /* something else */
    	}, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
});}
function playSound() {
    var sound = document.getElementById("audio");
    sound.volume = 0.1;
    sound.play();
}
function playSound1() {
    var sound = document.getElementById("audio1");
    sound.volume = 0.1;
    sound.play();
}
function playSound2() {
    var sound = document.getElementById("audio2");
    sound.volume = 0.1;
    sound.play();
}
function playSound3() {
    var sound = document.getElementById("audio3");
    sound.volume = 0.1;
    sound.play();
}
function playSound4() {
    var sound = document.getElementById("audio4");
    sound.volume = 0.1;
    sound.play();
}
function playSound5() {
    var sound = document.getElementById("audio5");
    sound.volume = 0.1;
    sound.play();
}
function playSound6() {
    var sound = document.getElementById("audio6");
    sound.volume = 0.1;
    sound.play();
}
function playSound7() {
    var sound = document.getElementById("audio7");
    sound.volume = 0.1;
    sound.play();
}
function playSound8() {
    var sound = document.getElementById("audio8");
    sound.volume = 0.1;
    sound.play();
}
window.addEventListener("DOMContentLoaded", event => {
const audio = document.getElementById("state_sound");
audio.volume = 0.2;
audio.play();
});