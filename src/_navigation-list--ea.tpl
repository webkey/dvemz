<!--@@classKey-->
<!--(1) START @@classKey FIRST level-->
<ul class="@@classKey__list @@classKey-js">
	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "О компании"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "О компании", "itemLink": "automatic-typography.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "Производство"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "Производство", "itemLink": "automatic-catalog.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "Монтажные работы"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "Монтажные работы", "itemLink": "automatic-products.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "Сотрудничество"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "Сотрудничество", "itemLink": "automatic-card.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "Заказ"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "Заказ", "itemLink": "automatic-news.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(mainNavItemActive === "Контакты"){current}">
		@@include('_navigation-LINK.tpl', { "itemText": "Контакты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item start-->
</ul>
<!--(1) END @@classKey FIRST level-->
<!--@@classKey end-->