$(".project1open,.project2open,.project3open").hide();

$(".pbutton1").click(function() {
    $(".project1open").toggle();
});
$(".pbutton2").click(function() {
    $(".project2open").toggle();
});
$(".pbutton3").click(function() {
    $(".project3open").toggle();
});

$(".project1,.project2,.project3").hide();
$(".allProjs").click(function() {
    $(".aboutMe,.contactInfo").hide();
    $(".project1,.project2,.project3").show();
});

$(".aboutMe,.contactInfo ").hide();
$(".personalInfo").click(function() {
    $(".project1,.project2,.project3").hide();
    $(".aboutMe,.contactInfo ").show();
});