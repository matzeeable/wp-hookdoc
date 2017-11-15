/**
 * Only use comment blocks which has a @hook tag and simulate as @class.
 */

'use strict';

exports.handlers = {
    beforeParse: function(e) {
        // a JSDoc comment looks like: /**[one or more chars]*/
        var parsed = [], comments = e.source.match(/\/\*\*[\s\S]+?\*\//g);
        if (comments) {
            // Generate new lines for non-comform comments
            comments.forEach(function(comment) {
                if (!/\*[ \t]*@hook[ ]/g.test(comment)) {
                    e.source = e.source.replace(comment, '\n'.repeat(comment.split('\n').length - 1));
                }
            });
            
            // Generate parsed
            comments.forEach(function(comment) {
                if (/\*[ \t]*@hook[ ]/g.test(comment)) {
                    parsed.push(comment.replace(/\*[ \t]*@hook[ ]/g, '* @class '));
                }
            });
        }
        
        if (parsed.length) {
            e.source = e.source.split(/\/\*\*[\s\S]+?\*\//g).reduce((res, src, i) => res + src.replace(/[^\n]/g, '') + parsed[i], '');
        }else{
            e.source = ''; // If file has no comments, parser should still receive no code
        }
    }
};