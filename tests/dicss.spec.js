
describe('DICSS', function() {
    'use strict';

    var stylesheet = document.querySelector('#dicss_wrapper');

    it('should be pulled', function() {
        expect(window.DICSS).not.to.equal(void 0);
    });

    it('should inject styles with JSON string argument', function() {
        DICSS.putIn(JSON.stringify({
            "span": {
                "display": "block"
            }
        }));
        var rules = stylesheet.sheet.cssRules;
        expect(rules[rules.length - 1].cssText).to.equal('span { display: block; }');
    });

    it ('should apply pseudo selectors to parent', function() {
        DICSS.putIn({
            "a": {
                ":hover": {
                    "text-decoration": "underline",
                    "opacity": "0.8"
                }
            }
        });
        var rules = stylesheet.sheet.cssRules;
        expect(rules[rules.length - 1].cssText).to.equal('a:hover { text-decoration: underline; opacity: 0.8; }');
    });

    it ('should apply "&" selector to parent', function() {
        DICSS.putIn({
            "h1": {
                "&.active": {
                    "color": "white"
                }
            }
        });
        var rules = stylesheet.sheet.cssRules;
        expect(rules[rules.length - 1].cssText).to.equal('h1.active { color: white; }');
    });

});

