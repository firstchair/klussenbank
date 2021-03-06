(function(){
Template.__checkName("comment_list");
Template["comment_list"] = new Template("Template.comment_list", (function() {
  var view = this;
  return [ HTML.UL({
    "class": "comments comment-list",
    "aria-live": "polite"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("child_comments"));
  }, function() {
    return [ "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("comment_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n    " ];
  }), "\n  "), "\n  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("threadModules"));
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("getTemplate")),
        data: Spacebars.call(view.lookup(".."))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n  " ];
  }) ];
}));

})();
