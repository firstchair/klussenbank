(function(){
Template.__checkName("postInfo");
Template["postInfo"] = new Template("Template.postInfo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-meta-item",
    "aria-live": "off"
  }, "\n    ", HTML.SPAN({
    "class": "startdatum"
  }, Blaze.View("lookup:start", function() {
    return Spacebars.mustache(view.lookup("start"));
  })), "\n    ", HTML.SPAN({
    "class": "einddatum"
  }, " ", Blaze.View("lookup:end", function() {
    return Spacebars.mustache(view.lookup("end"));
  })), HTML.Raw('\n    <!-- <span class="points">{{baseScore}}</span> -->\n    <!-- <span class="unit">{{pointsUnitDisplayText}}</span> -->\n    '), Blaze.If(function() {
    return Spacebars.call(view.lookup("postedAt"));
  }, function() {
    return HTML.SPAN({
      "class": "post-time"
    }, Blaze.View("lookup:timeAgo", function() {
      return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("postedAt"));
    }));
  }), "\n    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));
  }, function() {
    return [ "\n      | ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "post_edit",
          _id: view.lookup("_id")
        }));
      },
      "class": "edit-link goto-edit"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "edit");
    })), "\n    " ];
  }), "\n  ");
}));

})();
