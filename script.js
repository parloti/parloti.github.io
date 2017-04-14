(function (angular) {
	'use strict';
	angular.module('portfolio', ['ngAnimate', 'ng.deviceDetector']).directive('onFinishRender', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				if (scope.$last === true) {
					$timeout(function () {
						scope.$emit(attr.onFinishRender);
					});
				}
			}
		}
	}).controller('repeatController', ['$scope', 'deviceDetector', function ($scope, deviceDetector) {
		console.log(deviceDetector);
		$scope.browser = deviceDetector.browser;
		$scope.boards = [
			{
				name: 'About',
				iconClass: 'fa fa-info-circle icon-white',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Skills',
				iconClass: 'fa fa-wrench icon-white',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Projects',
				iconClass: 'fa fa-cogs icon-white',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Testimonials',
				iconClass: 'fa fa-comments icon-white',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Articles',
				iconClass: 'fa fa-pencil-square-o icon-white',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Contacts',
				iconClass: 'fa fa-address-book-o icon-white',
				isVisible: true,
				isActive: true,
				navigation: [
					{
						name: 'QR Code',
						href: '#qr-code-panel',
						iconClass: 'fa fa-user-circle-o',
						isVisible: true,
						isActive: true
					},
					{
						name: 'vCard',
						href: '#vcard-panel',
						iconClass: 'fa fa-address-card-o',
						isVisible: true,
						isActive: true
					},
					{
						name: 'Social',
						href: '#social-panel',
						iconClass: 'fa fa-share-alt',
						isVisible: true,
						isActive: true
					},
					{
						name: 'Message',
						href: '#message-panel',
						iconClass: 'fa fa-envelope-o',
						isVisible: true,
						isActive: true
					}
				],
				content: [
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
				]
			}
		];
		$scope.socialCards = [
			{
				name: 'LinkedIn',
				href: "linkedin.com/in/parloti/",
				iconClass: 'fa fa-linkedin',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Xing',
				href: "xing.com/profile/Alex_Parloti",
				iconClass: 'fa fa-xing',
				isVisible: true,
				isActive: true
			},
			{
				name: 'GitHub Profile',
				href: "github.com/parloti",
				iconClass: 'fa fa-github',
				isVisible: true,
				isActive: true
			},
			{
				name: 'GitHub Portfolio',
				href: "parloti.github.io",
				iconClass: 'fa fa-github-alt',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Free Code Camp',
				href: "freecodecamp.com/parloti",
				iconClass: 'fa fa-free-code-camp',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Meetup',
				href: "meetup.com/members/212267196/",
				iconClass: 'fa fa-meetup',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Twitter',
				href: "twitter.com/parloti",
				iconClass: 'fa fa-twitter',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Google+',
				href: "plus.google.com/+AlexdaSilvaParloti",
				iconClass: 'fa fa-google-plus-circle',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Facebook',
				href: "facebook.com/parloti",
				iconClass: 'fa fa-facebook',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Instagram',
				href: "instagram.com/alex.parloti/",
				iconClass: 'fa fa-instagram',
				isVisible: false,
				isActive: true
			},
			{
				name: 'YouTube',
				href: "youtube.com/user/parloti",
				iconClass: 'fa fa-youtube-play',
				isVisible: false,
				isActive: true
			}
		];
		$scope.open = function (board) {
			console.log(board);
		}
		$scope.$on('renderedModal', function (ngRepeatFinishedEvent) {
			console.log(ngRepeatFinishedEvent);
			console.log("done");
			$('#ContactsModal').modal('show');
			$('nav a:eq(3)').tab('show')
		})
		
		
	}]);
})(window.angular);