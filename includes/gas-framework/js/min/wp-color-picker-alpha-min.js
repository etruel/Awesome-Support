/**!
 * wp-color-picker-alpha
 *
 * Overwrite Automattic Iris for enabled Alpha Channel in wpColorPicker
 * Only run in input and is defined data alpha in true
 *
 * Version: 2.1.4
 * https://github.com/kallookoo/wp-color-picker-alpha
 * Licensed under the GPLv2 license or later.
 */
!function(s){var p,o,r,a,i,n,l,c;s.wp.wpColorPicker.prototype._hasAlpha||(p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==",o='<div class="wp-picker-holder" />',r='<div class="wp-picker-container" />',i=!(a='<input type="button" class="button button-small" />'),__=wp.i18n.__,"undefined"!=typeof wpColorPickerL10n&&(i=void 0!==wpColorPickerL10n.current),i?n='<a tabindex="0" class="wp-color-result" />':(n='<button type="button" class="button wp-color-result" aria-expanded="false"><span class="wp-color-result-text"></span></button>',l="<label></label>",c='<span class="screen-reader-text"></span>'),Color.fn.toString=function(){if(this._alpha<1)return this.toCSS("rgba",this._alpha).replace(/\s+/g,"");var t=parseInt(this._color,10).toString(16);return this.error?"":(t.length<6&&(t=("00000"+t).substr(-6)),"#"+t)},s.widget("wp.wpColorPicker",s.wp.wpColorPicker,{_hasAlpha:!0,_create:function(){if(s.support.iris){var e=this,t=e.element;if(s.extend(e.options,t.data()),"hue"===e.options.type)return e._createHueOnly();e.close=s.proxy(e.close,e),e.initialValue=t.val(),t.addClass("wp-color-picker"),i?(t.hide().wrap(r),e.wrap=t.parent(),e.toggler=s(n).insertBefore(t).css({backgroundColor:e.initialValue}).attr("title",__("Select Color")).attr("data-current",__("Current")),e.pickerContainer=s(o).insertAfter(t),e.button=s(a).addClass("hidden")):(t.parent("label").length||(t.wrap(l),e.wrappingLabelText=s(c).insertBefore(t).text(__("Color value"))),e.wrappingLabel=t.parent(),e.wrappingLabel.wrap(r),e.wrap=e.wrappingLabel.parent(),e.toggler=s(n).insertBefore(e.wrappingLabel).css({backgroundColor:e.initialValue}),e.toggler.find(".wp-color-result-text").text(__("Select Color")),e.pickerContainer=s(o).insertAfter(e.wrappingLabel),e.button=s(a)),e.options.defaultColor?(e.button.addClass("wp-picker-default").val(__("Default")),i||e.button.attr("aria-label",__("Select default color"))):(e.button.addClass("wp-picker-clear").val(__("clear")),i||e.button.attr("aria-label",__("Clear color"))),i?t.wrap('<span class="wp-picker-input-wrap" />').after(e.button):(e.wrappingLabel.wrap('<span class="wp-picker-input-wrap hidden" />').after(e.button),e.inputWrapper=t.closest(".wp-picker-input-wrap")),t.iris({target:e.pickerContainer,hide:e.options.hide,width:e.options.width,mode:e.options.mode,palettes:e.options.palettes,change:function(t,o){e.options.alpha?(e.toggler.css({"background-image":"url("+p+")"}),i?e.toggler.html('<span class="color-alpha" />'):(e.toggler.css({position:"relative"}),0==e.toggler.find("span.color-alpha").length&&e.toggler.append('<span class="color-alpha" />')),e.toggler.find("span.color-alpha").css({width:"30px",height:"100%",position:"absolute",top:0,left:0,"border-top-left-radius":"2px","border-bottom-left-radius":"2px",background:o.color.toString()})):e.toggler.css({backgroundColor:o.color.toString()}),s.isFunction(e.options.change)&&e.options.change.call(this,t,o)}}),t.val(e.initialValue),e._addListeners(),e.options.hide||e.toggler.click()}},_addListeners:function(){var o=this;o.wrap.on("click.wpcolorpicker",function(t){t.stopPropagation()}),o.toggler.click(function(){o.toggler.hasClass("wp-picker-open")?o.close():o.open()}),o.element.on("change",function(t){""!==s(this).val()&&!o.element.hasClass("iris-error")||(o.options.alpha?(i&&o.toggler.removeAttr("style"),o.toggler.find("span.color-alpha").css("backgroundColor","")):o.toggler.css("backgroundColor",""),s.isFunction(o.options.clear)&&o.options.clear.call(this,t))}),o.button.on("click",function(t){s(this).hasClass("wp-picker-clear")?(o.element.val(""),o.options.alpha?(i&&o.toggler.removeAttr("style"),o.toggler.find("span.color-alpha").css("backgroundColor","")):o.toggler.css("backgroundColor",""),s.isFunction(o.options.clear)&&o.options.clear.call(this,t),o.element.trigger("change")):s(this).hasClass("wp-picker-default")&&o.element.val(o.options.defaultColor).change()})}}),s.widget("a8c.iris",s.a8c.iris,{_create:function(){var e,t,o,r,a,i,n,l;this._super(),this.options.alpha=this.element.data("alpha")||!1,this.element.is(":input")||(this.options.alpha=!1),void 0!==this.options.alpha&&this.options.alpha&&(t=(e=this).element,r=(o=s('<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>').appendTo(e.picker.find(".iris-picker-inner"))).find(".iris-slider-offset-alpha"),a={aContainer:o,aSlider:r},void 0!==t.data("custom-width")?e.options.customWidth=parseInt(t.data("custom-width"))||0:e.options.customWidth=100,e.options.defaultWidth=t.width(),(e._color._alpha<1||-1!=e._color.toString().indexOf("rgb"))&&t.width(parseInt(e.options.defaultWidth+e.options.customWidth)),s.each(a,function(t,o){e.controls[t]=o}),e.controls.square.css({"margin-right":"0"}),i=e.picker.width()-e.controls.square.width()-20,l=i/2-(n=i/6),s.each(["aContainer","strip"],function(t,o){e.controls[o].width(l).css({"margin-left":n+"px"})}),e._initControls(),e._change())},_initControls:function(){var e;this._super(),this.options.alpha&&(e=this).controls.aSlider.slider({orientation:"vertical",min:0,max:100,step:1,value:parseInt(100*e._color._alpha),slide:function(t,o){e._color._alpha=parseFloat(o.value/100),e._change.apply(e,arguments)}})},_change:function(){this._super();var t,o,e,r,a,i,n,l=this,s=l.element;this.options.alpha&&(t=l.controls,o=parseInt(100*l._color._alpha),r=["rgb("+(e=l._color.toRgb()).r+","+e.g+","+e.b+") 0%","rgba("+e.r+","+e.g+","+e.b+", 0) 100%"],a=l.options.defaultWidth,i=l.options.customWidth,n=l.picker.closest(".wp-picker-container").find(".wp-color-result"),t.aContainer.css({background:"linear-gradient(to bottom, "+r.join(", ")+"), url("+p+")"}),n.hasClass("wp-picker-open")&&(t.aSlider.slider("value",o),l._color._alpha<1?(t.strip.attr("style",t.strip.attr("style").replace(/rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g,"rgb($1$3$5)")),s.width(parseInt(a+i))):s.width(a))),s.data("reset-alpha")&&l.picker.find(".iris-palette-container").on("click.palette",".iris-palette",function(){l._color._alpha=1,l.active="external",l._change()}),s.trigger("change")},_addInputListeners:function(r){function t(t){var o=new Color(r.val()),e=r.val();r.removeClass("iris-error"),o.error?""!==e&&r.addClass("iris-error"):o.toString()!==a._color.toString()&&("keyup"===t.type&&e.match(/^[0-9a-fA-F]{3}$/)||a._setOption("color",o.toString()))}var a=this;r.on("change",t).on("keyup",a._debounce(t,100)),a.options.hide&&r.on("focus",function(){a.show()})}}))}(jQuery),jQuery(document).ready(function(t){t(".color-picker").wpColorPicker()});