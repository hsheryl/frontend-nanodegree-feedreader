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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         allFeeds.forEach(function(element) {
            it('URL defined', function() {
              expect(element.url).toBeDefined();
              expect(element.url).not.toBe(0);
            });
          });

                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
        allFeeds.forEach(function(element) {
          it('name defined', function() {
            expect(element.name).toBeDefined();
            expect(element.name).not.toBe(0);
          });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         myclass = $('body').hasClass('menu-hidden');
         it('is hidden', function() {
           expect(myclass).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
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
    /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    let initialLoad = 0;
    beforeEach(function(done) {
      loadFeed(0, function(){
        initialLoad = $('.feed').html();
        done();
      });
  });

  /*I defined initialLoad as = to 0 therefore if it is no longer 0
      it must have at least one element inside it. */
    it('contains something', function(done){
      expect(initialLoad).not.toBe(0);
      done();
    });
  });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */
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
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
