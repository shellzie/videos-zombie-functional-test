var Browser = require('zombie'),
    expect = require('expect.js');

var browser = new Browser({ debug: false });

describe('basic video elements are present', function () {
    this.timeout(150000);
    it("has 2 videos after page loads", function(done){
        var url = "http://localhost:3000/showroom_cms/content/components/core/video?preview=true";
        browser.visit(url, function() {
            expect(browser.text("H1")).to.contain("Video Component Test Page");
//            expect(("div.cvideo:first").val.to.be.false);
//            expect(("div.cvideo:last").val.to.be.true);

//            var first_vid = document.getElementsByClassName("cvideo")[0];
//            expect(first_vid.getAttribute('data-autoplay').to.be.eql('off'));

            var field = document.querySelector(":div[data-autoplay=off]");
            expect(field.to.not.be.empty());

            done();
        });
    });
});
