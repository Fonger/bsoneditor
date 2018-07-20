/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define('ace/theme/bsoneditor', ['require', 'exports', 'module', 'ace/lib/dom'], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-bsoneditor";
exports.cssText = ".ace-bsoneditor .ace_gutter {\
background: #ebebeb;\
color: #333\
}\
\
.ace-bsoneditor.ace_editor {\
font-family: \"dejavu sans mono\", \"droid sans mono\", consolas, monaco, \"lucida console\", \"courier new\", courier, monospace, sans-serif;\
line-height: 1.3;\
background-color: #fff;\
}\
.ace-bsoneditor .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-bsoneditor .ace_scroller {\
background-color: #FFFFFF\
}\
.ace-bsoneditor .ace_text-layer {\
color: gray\
}\
.ace-bsoneditor .ace_variable {\
color: #1a1a1a\
}\
.ace-bsoneditor .ace_cursor {\
border-left: 2px solid #000000\
}\
.ace-bsoneditor .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid #000000\
}\
.ace-bsoneditor .ace_marker-layer .ace_selection {\
background: lightgray\
}\
.ace-bsoneditor.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
border-radius: 2px\
}\
.ace-bsoneditor .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-bsoneditor .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #BFBFBF\
}\
.ace-bsoneditor .ace_marker-layer .ace_active-line {\
background: #FFFBD1\
}\
.ace-bsoneditor .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-bsoneditor .ace_marker-layer .ace_selected-word {\
border: 1px solid lightgray\
}\
.ace-bsoneditor .ace_invisible {\
color: #BFBFBF\
}\
.ace-bsoneditor .ace_keyword,\
.ace-bsoneditor .ace_meta,\
.ace-bsoneditor .ace_support.ace_constant.ace_property-value {\
color: #AF956F\
}\
.ace-bsoneditor .ace_keyword.ace_operator {\
color: #484848\
}\
.ace-bsoneditor .ace_keyword.ace_other.ace_unit {\
color: #96DC5F\
}\
.ace-bsoneditor .ace_constant.ace_language {\
color: darkorange\
}\
.ace-bsoneditor .ace_constant.ace_numeric {\
color: red\
}\
.ace-bsoneditor .ace_constant.ace_character.ace_entity {\
color: #BF78CC\
}\
.ace-bsoneditor .ace_invalid {\
color: #FFFFFF;\
background-color: #FF002A;\
}\
.ace-bsoneditor .ace_fold {\
background-color: #AF956F;\
border-color: #000000\
}\
.ace-bsoneditor .ace_storage,\
.ace-bsoneditor .ace_support.ace_class,\
.ace-bsoneditor .ace_support.ace_function,\
.ace-bsoneditor .ace_support.ace_other,\
.ace-bsoneditor .ace_support.ace_type {\
color: #C52727\
}\
.ace-bsoneditor .ace_string {\
color: green\
}\
.ace-bsoneditor .ace_comment {\
color: #BCC8BA\
}\
.ace-bsoneditor .ace_entity.ace_name.ace_tag,\
.ace-bsoneditor .ace_entity.ace_other.ace_attribute-name {\
color: #606060\
}\
.ace-bsoneditor .ace_markup.ace_underline {\
text-decoration: underline\
}\
.ace-bsoneditor .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
