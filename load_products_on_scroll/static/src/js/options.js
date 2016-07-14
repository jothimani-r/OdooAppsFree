"use strict";
if (typeof window.HI == "undefined") {
    HI = {};
}

HI.optInCookies = {
    l10n: {
        buttonText: "Options",
        Close: "x",
    },

    setCookie: function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; path=/shop; " + expires;
    },

    getCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    },

    checkCookie: function() {
        var scroll = HI.optInCookies.getCookie("scroll");
        if (scroll === undefined) {
            HI.optInCookies.setCookie("scroll", 'page', 50);
        }
    },

    showBtn: function() {
        var t = HI.optInCookies.topElement;
        var btn_options = document.createElement("div");
        btn_options.id = "btn_options";
        btn_options.class = "clear fixed";

        var cogs = document.createElement("i");
        cogs.className = "fa fa-cogs";
        cogs.setAttribute("aria-hidden", "true");
        btn_options.appendChild(cogs);

        var btn_text = document.createElement("span");
        btn_text.appendChild(
            document.createTextNode(HI.optInCookies.l10n.buttonText)
        );
        btn_options.appendChild(btn_text);
        btn_options.onmouseover = function() {
            HI.optInCookies.showBox();
        }
        t.appendChild(btn_options);
        HI.optInCookies.topElement = t;
    },

    showBox: function() {
        var t = HI.optInCookies.topElement;
        var box_options = document.createElement("div");
        box_options.id = "box_options";

        var choices = document.createElement("div");
        var boxTitle = document.createElement("h4");
        boxTitle.appendChild(
            document.createTextNode(HI.optInCookies.l10n.buttonText)
        );
        box_options.appendChild(boxTitle);

        var Options = document.createElement("div");
        Options.className = "radioOptions";
        Options.innerHTML = '
<ul class="list-unstyled">
    <li class="form-group" style="margin: 0;">
        <label class="control-label" style="margin: 5px;">
            <input class="rOptions" name="scroll" value="page" style="vertical-align: top; margin-right: 10px;" type="radio" onClick="HI.optInCookies.Choosen(this)">
            <span style="vertical-align: middle; margin-left: 10px;"> Pagination </span> </label>
    </li>
    <li class="form-group" style="margin: 0;">
        <label class="control-label" style="margin: 5px;">
            <input class="rOptions" name="scroll" value="click" style="vertical-align: top; margin-right: 10px;" type="radio" onClick="HI.optInCookies.Choosen(this)">
            <span style="vertical-align: middle; margin-left: 10px;"> Click </span> </label>
    </li>
    <li class="form-group" style="margin: 0;">
        <label class="control-label" style="margin: 5px;">
            <input class="rOptions" name="scroll" value="scroll" style="vertical-align: top; margin-right: 10px;" type="radio" onClick="HI.optInCookies.Choosen(this)">
            <span style="vertical-align: middle; margin-left: 10px;"> Scroll </span> </label>
    </li>
</ul>'
        box_options.appendChild(Options);

        t.appendChild(box_options);

        box_options.onmouseleave = function(event) {
            this.parentNode.removeChild(this);
        }
        var scroll = HI.optInCookies.getCookie("scroll");

        if (scroll != undefined) {
            var list = document.getElementsByClassName("rOptions");
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i].value === scroll) {
                    list[i].checked = true;
                }
            }
        }
    },

    Choosen: function(event) {
        if (event.value === 'page') {
            //        $('.products_pager ul').show();
            //        $('.oe_website_sale').find('.showmore').hide();
            location.reload();
        } else if (event.value === 'click') {
            $('.products_pager ul').hide();
            $('.oe_website_sale').find('.showmore').show();
        } else if (event.value === 'scroll') {
            $('.products_pager ul').hide();
            $('.oe_website_sale').find('.showmore').hide();
        }
        HI.optInCookies.setCookie('scroll', event.value, 50);
    },

    showSplash: function() {

        if (document.getElementsByClassName('oe_website_sale').length < 1) return;

        HI.optInCookies.checkCookie();

        if (HI.optInCookies.topElement) {
            var t = HI.optInCookies.topElement;
            t.parentNode.removeChild(t);
        }
        var t = document.createElement("div");
        t.id = "container";

        document.body.appendChild(t);
        HI.optInCookies.topElement = t;
        HI.optInCookies.showBtn();
    },

    topElement: ""
};
