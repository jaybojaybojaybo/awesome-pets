$(function() {
  $("#night-mode").click(function() {
    $("body").addClass("night-mode");
    $("button#night-mode").hide();
    $("button#normal-mode").show();
  });
  $("#normal-mode").click(function() {
    $("body").removeClass("night-mode");
    $("button#normal-mode").hide();
    $("button#night-mode").show();
  });
  $("#list1").click(function() {
    $("#list1").toggleClass("backdrop");
  });
  $("#list2").click(function() {
    $("#list2").toggleClass("backdrop");
  });
});
