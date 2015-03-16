// dicss -- directly injected css
(function() {
	'use strict';

	if ( ({})<=8 ) {
		// yeah, you get it...
	}

	var stylesheet, styletag = document.createElement('style');
	styletag.setAttribute('id', 'dicss_wrapper');
	document.body.appendChild(styletag);
	stylesheet = styletag.sheet ? styletag.sheet : styletag.styleSheet;

	function addRule(selector, rule) {
		if (stylesheet.insertRule) {
			stylesheet.insertRule(selector + ' { ' + rule + ' } ', stylesheet.cssRules.length);
		} else {
			// IE <9
			if (stylesheet.addRule) {
				stylesheet.addRule(selector, rule);
			}
		}
	}

	function removeRule(selector, property) {
		var i, j, selectors,
			rules = stylesheet.cssRules || stylesheet.rules || [];
		selector = selector.toLowerCase();

		for (i = 0; i < rules.length; i++) {
			selectors = rules[i].selectorText.toLowerCase().split(/[, ]+/);
			for (j = 0; j < selectors.length; j++) {
				if (selectors[j] === selector) {
					if (selectors.length === 0) {
						rules[i].style.removeProperty(property);
					} else {
						Array.prototype.splice.call(selectors, j, 1);
						rules[i].selectorText = selectors.join(', ');
					}
					break;
				}
			}
		}
	}

	function extend(obj) {
		var attr;
		for (attr in obj) {
			if (obj.hasOwnProperty(attr)) {
				window.DICSS[attr] = obj[attr];
			}
		}
	}

	window.DICSS = {
		"putIn": addRule,
		"pullOut": removeRule
	};
})();
