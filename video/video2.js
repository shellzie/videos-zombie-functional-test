var Browser = require('zombie'),
    assert = require('assert'),  //needed for TDD
    expect = require('chai').expect;   //needed for BDD

//document = require("jsdom").jsdom(); //js implementation of the DOM for server-side
//window = document.createWindow();
//jQuery = $ = require("jquery").create(window);
//$.noConflict();
//var window = require("jsdom").jsdom().createWindow();

//$ = jQuery;


var browser = new Browser({ debug: false });


describe('Video Component Functional Test', function() {
    this.timeout(150000);

    var url = "http://localhost:3000/showroom_cms/content/components/core/video?preview=true";

    it('displays 1 video that is autoplaying and another that has not started', function(done) {
        browser.visit(url, function() {
            //first video is cued
            //second video is autoplaying

            video = browser.queryAll("iframe")[1];
            video_id = video.id;
            //video1_obj = browser.window.Intuit.Library.Video.YouTubePlayer.play(video1_id); //play() returns the object
            vid_state = browser.window.Intuit.Library.Video.YouTubePlayer.play(video_id); //play() returns the object
            //state = video1_obj.getState(video1_id);
            //video1State = browser.window.Intuit.Library.Video.YouTubePlayer.getState(video1_id);
            //expect the first video to be "cued" (not started).
            expect(vid_state).to.equal("1"); //unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
            done();
        });
    });



    function onYouTubePlayerReady(playerId) {
        player = document.getElementById(playerId);
        player.addEventListener('onStateChange', 'playerStateChanged');
    }


    //working but comment for now so we don't run it each time we're writing new tests.
//    it('loads 2 videos', function(done) {
//
//        browser.visit(url, function() {
//            var iframes = browser.querySelectorAll("iframe");
//            expect(iframes[0].getAttribute("src")).to.contain("youtube");
//            expect(iframes[0].getAttribute("src")).to.contain("autoplay=0");
//            expect(iframes[1].getAttribute("src")).to.contain("youtube");
//            expect(iframes[1].getAttribute("src")).to.contain("autoplay=1");
//            done();
//        });
//    });


    //working test but relies on markup
//    it('displays 1 autoplay video and 1 video not playing', function(done) {
//        var videos = browser.querySelectorAll(".cvideo");
//        assert.equal(videos[0].getAttribute("data-autoplay"), "off");
//        assert.equal(videos[1].getAttribute("data-autoplay"), "on");
//        done();
//    });



});
