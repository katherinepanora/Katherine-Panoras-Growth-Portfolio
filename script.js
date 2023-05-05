$(".project1open,.project2open,.project3open,.project4open").hide();

$(".pbutton1").click(function() {
    $(".project1open").toggle();
});
$(".pbutton2").click(function() {
    $(".project2open").toggle();
});
$(".pbutton3").click(function() {
    $(".project3open").toggle();
});
$(".pbutton4").click(function() {
    $(".project4open").toggle();
});

$(".project1,.project2,.project3,.project4").hide();
$(".allProjs").click(function() {
    $(".project1open,.project2open,.project3open").hide();
    $(".aboutMe,.contactInfo").hide();
    $(".contactMe").hide();
    $(".project1,.project2,.project3,.project4").show();
});

$(".aboutMe,.contactInfo ").hide();
$(".personalInfo").click(function() {
    $(".project1,.project2,.project3,.project4").hide();
    $(".project1open,.project2open,.project3open,.project4open").hide();
    $(".contactMe").hide();
    $(".aboutMe,.contactInfo ").show();
});

$(".contactMe").hide();
$(".contacts").click(function() {
    $(".project1,.project2,.project3,.project4").hide();
    $(".project1open,.project2open,.project3open,.project4open").hide();
    $(".aboutMe,.contactInfo ").hide();
    $(".contactMe").show();
});
