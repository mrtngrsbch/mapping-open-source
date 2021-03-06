// Sortable tables
function setUpTable(){
  var options = {
    valueNames: [ 'repository', 'source', 'description', 'language', 'update', 'stars', 'forks' ],
    page: 2000
  };

  var reposTable = new List('mapping', options);

  reposTable.sort('repository', { order: "asc" });

  $("#mapping").on("keyup", "input", function () {
    var numResults = $("#repos_table tbody tr").length;
    $(".results").text(numResults);
  });
  $('#mapping table').stickyTableHeaders();

  // removes sort event from any items classed .no-sort
  // doing so allows the data from this column to remain searchable
  $('.no-sort').off('click.sort');

}

