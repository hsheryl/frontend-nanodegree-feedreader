/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         allFeeds.forEach(function(element) {
            it('URL defined', function() {
              expect(element.url).toBeDefined();
              expect(element.url).not.toBe(0);
            });
          });

                /* A test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
        allFeeds.forEach(function(element) {
          it('name defined', function() {
            expect(element.name).toBeDefined();
            expect(element.name).not.toBe(0);
          });
        });
    });


    describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.
         */
         myclass = $('body').hasClass('menu-hidden');
         it('is hidden', function() {
           expect(myclass).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes on click', function() {
            let menuIcon = $('.menu-icon-link');
            menuIcon.click();
            myclass = $('body').hasClass('menu-hidden');
            expect(myclass).toBe(false);
            menuIcon.click();
            myclass = $('body').hasClass('menu-hidden');
            expect(myclass).toBe(true);
          });
   });

  describe('Initial Entries', function() {
    let initialLoad = 0;
    beforeEach(function(done) {
      loadFeed(0, function(){
        initialLoad = $('.feed .entry').length();
        done();
      });
  });

    it('contains something', function(done){
      expect(initialLoad => 1).toBe(true);
      done();
    });
  });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
       */

  describe('New Feed Selection', function() {
    let loadFeed0 = 0;
    let loadFeed1 = 0;
    beforeEach(function(done) {
      loadFeed(0, function() {
        loadFeed0 = $('.feed').html();
        loadFeed(1, function() {
          loadFeed1 = $('.feed').html();
          done();
        });
      });
    });

    it('changes to new', function(done){
      expect(loadFeed0).not.toBe(loadFeed1);
      done();
    });
  });
}());
