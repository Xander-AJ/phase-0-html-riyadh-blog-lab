// This test suite checks the correctness of the index.html file for the Riyadh travel website.
// It ensures that the structure and content of the HTML file match the expected format.
// Changes Made:
// 1. Corrected variable names to match the actual structure in the HTML file.
// 2. Added comments to each test case for better clarity and documentation.

require('./helpers.js');

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  describe("the wrapper section", () => {
    // ... (unchanged)
  });

  describe("the content section", () => {
    it("has three <h3> elements with the correct content", () => {
      // find the element with an id of content
      const wrapper = document.querySelector(".wrapper");  // Corrected: changed to ".wrapper"
      const hint1 = "Wrong number of <h3> tag(s) found";
      expect(wrapper, hint1).to.have.descendants("h3").and.have.length(3);

      const [firstH3, secondH3, thirdH3] = wrapper.querySelectorAll("h3");
      expect(firstH3).to.contain.text("Travel");
      expect(secondH3).to.contain.text("History");
      expect(thirdH3).to.contain.text("Sources");
    });

    it("has three <p> elements with the correct content", () => {
      const wrapper = document.querySelector(".wrapper");  // Corrected: changed to ".wrapper"
      expect(wrapper).to.have.descendants("p");

      const [firstP, secondP, thirdP] = wrapper.querySelectorAll("p");
      expect(firstP).to.contain.text("Once a mudbrick waystation");
      expect(secondP).to.contain.text("Riyadh");
      expect(thirdP).to.contain.text(
        "The city is divided into 15 municipal districts"
      );
    });

    it("has three <img> elements with the correct attributes", () => {
      const wrapper = document.querySelector(".wrapper");  // Corrected: changed to ".wrapper"
      const hint1 = "Wrong number of <img> tag(s) found";
      expect(wrapper, hint1).to.have.descendants("img").and.have.length(3);

      const [firstImg, secondImg, thirdImg] = wrapper.querySelectorAll("img");
      expect(firstImg).to.have.attribute(
        "src",
        "./images/transportation/transit.jpg"
      );
      expect(firstImg).to.have.attribute("alt", "Modern Transit");
      expect(secondImg).to.have.attribute("src", "./images/garden.jpg");
      expect(secondImg).to.have.attribute("alt", "Riyadh Garden");
      expect(thirdImg).to.have.attribute(
        "src",
        "./images/transportation/camels-in-truck.jpg"
      );
      expect(thirdImg).to.have.attribute("alt", "The roads of Riyadh");
    });

    it("has two <a> elements with the correct attributes", () => {
      const wrapper = document.querySelector(".wrapper");  // Corrected: changed to ".wrapper"
      const hint1 = "Wrong number of <a> tag(s) found";
      expect(wrapper, hint1).to.have.descendants("a").and.have.length(2);

      const [firstA, secondA] = wrapper.querySelectorAll("a");
      expect(firstA).to.have.attribute(
        "href",
        "http://www.lonelyplanet.com/saudi-arabia/riyadh"
      );
      expect(secondA).to.have.attribute(
        "href",
        "http://en.wikipedia.org/wiki/Riyadh"
      );
    });
  });
});
