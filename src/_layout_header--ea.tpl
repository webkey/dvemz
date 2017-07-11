<!--HEADER-->
<header class="header">
	<div class="header__align">
		<div class="header__holder">
			<div class="header__row header__row--logo">
				<div class="header__cell">
					<div class="logo">
						<a href="index.html">
							<div class="logo-img">Электроавтоматика</div>
							<!--<div class="logo-title"><span>Электроавтоматика</span></div>-->
							<!--<div class="logo-text"><span>Производство и продажа Электромонтажного оборудования</span></div>-->
						</a>
					</div>
				</div>
			</div>
			<div class="header__row">
				<div class="header__cell">
					@@include('_tpl_user-options.tpl')
				</div>
			</div>
			<div class="header__row header__row--arrow">
				<div class="header__cell">
					<a href="#" class="down-arrows move-next-section-js">
					<span class="down-arrow__align">
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
					</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
<!--HEADER end-->

<!--NAVIGATION-->
<aside class="nav-wrap nav-popup-js">
	<div class="nav-wrap__align">
		<div class="nav-wrap__holder">
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<header class="nav-title">
						<a href="index.html" class="logo-nav">
							<div class="logo-nav__img"><span>Электроавтоматика</span></div>
							<span class="logo-nav__title">Интернет-магазин</span>
						</a>
					</header>
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<nav class="nav">
						@@include('_navigation-list.tpl', {
							"mainNavItemActive": "@@mainNavItemActive",
							"classKey": "nav"
						})
					</nav>
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<footer class="nav-footer">
						<a href="#" class="btn-siblings"><i>&nbsp;</i><span>Электрощитовое <br> оборудование</span></a>
						<div class="copyright">&copy; 2017 ОАО Электроавтоматика</div>
						<div class="map-site"><a href="map-site.html" title="Перейти на карту сайта">Карта сайта</a></div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</aside>
<!--NAVIGATION end-->