import { marked } from "marked";
import sanitizeHtmlLibrary from "sanitize-html";
import TurndownService from "turndown";

function sanitizeMarkdom(markdownContent){
    const turndownService = new TurndownService();

    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    const sanitizedMarkdom = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdom;
}

export default sanitizeMarkdom;