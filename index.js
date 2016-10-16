'use strict';
module.exports = function (content, file, conf) {
    content = content.replace(/\s*\n\s*/g, '');
    content = content.replace(/<script[^>]*?>.*?<\/script>/ig, '');
    content = content.replace(/<style[^>]*?>.*?<\/style>/ig, '');
    content = content.replace(/<!--[/!]*?[^<>]*?>/ig, '');
    content = content.replace(/'/g, "\\'");
    if (conf.tpl) {
        content = conf.tpl.split('${content}').join(content)
    } else {
        content = "define(function(){return '" + content + "'});";
    }
    return content;
};