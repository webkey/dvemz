@@if (context.inCart) {
	<article class="products__item in-cart">
}
@@if (!context.inCart) {
	<article class="products__item">
}
	<a href="#" class="products__inner">
		<div class="products__figure">
			<div class="products__img">
				<img src="img/@@src" alt="@@title" />
			</div>
		</div>
		<div class="products__content">
			<div class="products__title">@@title</div>
			<div class="products__stock">@@stock</div>
			@@if (context.price) {
				<div class="products__price">
					<div class="cur">@@price</div>
					@@if (context.old) {
						<div class="old">@@old</div>
					}
				</div>
			}
			@@if (!context.price) {
				<div class="products__price">
					<div class="no">цена по запросу</div>
				</div>
			}
			<div class="products__options">
				<div class="products__btn" data-href="#">В корзину</div>
			</div>
		</div>
	</a>

</article>