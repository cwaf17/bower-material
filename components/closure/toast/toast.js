/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-ce051e8
 */
goog.provide('ng.material.components.toast');
goog.require('ng.material.components.button');
goog.require('ng.material.components.swipe');
goog.require('ng.material.core');
!function(){"use strict";function t(){return{restrict:"E"}}function o(t){function o(t,o,e,n,i){function a(n,a,s){a.addClass(s.position.split(" ").map(function(t){return"md-"+t}).join(" ")),s.parent.addClass(r(s.position));var c=e(n,"swipeleft swiperight");return s.detachSwipe=c(a,function(o){a.addClass("md-"+o.type),t(i.cancel)}),o.enter(a,s.parent)}function s(t,e,n){return n.detachSwipe(),n.parent.removeClass(r(n.position)),o.leave(e)}function r(t){return"md-toast-open-"+(t.indexOf("top")>-1?"top":"bottom")}return{onShow:a,onRemove:s,position:"bottom left",themable:!0,hideDelay:3e3}}return o.$inject=["$timeout","$animate","$mdSwipe","$mdTheming","$mdToast"],t("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:o}).addPreset("simple",{methods:["content","action","highlightAction"],options:["$mdToast",function(t){return{template:["<md-toast ng-class=\"{'md-capsule': toast.capsule}\">","<span flex>{{ toast.content }}</span>",'<md-button ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-action\': toast.highlightAction}">',"{{toast.action}}","</md-button>","</md-toast>"].join(""),controller:function(){this.resolve=function(){t.hide()}},controllerAs:"toast",bindToController:!0}}]})}angular.module("material.components.toast",["material.core","material.components.swipe","material.components.button"]).directive("mdToast",t).provider("$mdToast",o),o.$inject=["$$interimElementProvider"]}();