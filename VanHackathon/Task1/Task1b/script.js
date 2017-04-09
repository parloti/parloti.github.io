!function () {
    function Section(prop) {
        this.linkElement = prop.linkElement;
        this.element = prop.element;
    }
    Section.prototype.addEventListenerOnLink = function () {
        if (this.linkElement.addEventListener) {
            this.linkElement.addEventListener("click", this.onClickLink.bind(this), false);
        }
        else {
            var that = this
            this.linkElement.attachEvent("onclick", function () {
                that.onClickLink.call(that);
            });
        }
    }
    Section.prototype.onClickLink = function () {
        var secId;
        if (event.target) {
            secId = event.target.hash;
        }
        else {
            secId = event.srcElement.hash;
        }
        this.hideAllOtherSections();
        this.showSection();
    }
    Section.prototype.hideAllOtherSections = function () {
        var sections = document.querySelectorAll(".content div");
        for (var i = 0; i < this.Sections.length; i++) {
            var section = this.Sections[i];
            if (this !== section) {
                section.element.className = "hide";
            }
        }
    }
    Section.prototype.showSection = function () {
        this.element.className = "show";
    }

    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", main, false);
    }
    else {
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                main();
            }
        });
    }
    function main() {
        var Sections=[];
        var elements = document.querySelectorAll(".content div");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var prop = {
                element: element,
                linkElement: document.querySelector("#linksec" + (i + 1))
            }
            var section = new Section(prop);
            section.Sections=Sections;
            Sections.push(section);
            section.addEventListenerOnLink();
        }
    }
}();