(function(){
Template.__checkName("post_body");
Template["post_body"] = new Template("Template.post_body", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "post-body markdown",
    "aria-live": "polite"
  }, Blaze.View("lookup:htmlBody", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));
  })), HTML.Raw('\n\n  <!-- <form name="contact-form" id="contact-form" class="contact-form clear-fix" target="uploader_iframe">\n\n                        <div class="clear-fix">\n\n                            <ul class="list-0 clear-fix">\n\n                                <li>\n                                    <div class="block field-box">\n                                        <label for="contact-form-name">Your Name</label>\n                                        <input type="text" name="contact-form-name" id="contact-form-name" value=""/>\n                                    </div>\n                                </li>\n\n                                <li>\n                                    <div class="block field-box">\n                                        <label for="contact-form-mail">Your E-mail</label>\n                                        <input type="text" name="contact-form-mail" id="contact-form-mail" value=""/>\n                                    </div>\n                                </li>\n\n                                <li>\n                                    <div class="block field-box">\n                                        <label for="contact-form-message">Your message</label>\n                                        <textarea name="contact-form-message" id="contact-form-message" rows="1" cols="1"></textarea>\n                                    </div>\n                                </li>\n\n\n                                <h5 id="submitResponse"></h5>\n\n                                <li>\n                                    <div class="block field-box field-box-button">\n                                        <input type="submit" id="contact-form-submit" name="contact-form-submit" class="button" value="Submit"/>\n                                    </div>\n                                </li>\n\n\n                            </ul>\n\n                        </div>\n\n                    </form> -->') ];
}));

})();
