<div class="share-list__item">
	<a href="#" class="share-list__inner">
		<div class="share-list__labels">
			@@if (context.sale) {
			<div class="share-list__label label-sale">@@sale</div>
			}
			@@if (context.hit) {
			<div class="share-list__label label-hit">@@hit</div>
			}
			@@if (context.new) {
			<div class="share-list__label label-new">@@new</div>
			}
		</div>
		<div class="share-list__content">
			<div class="share-list__img">
				<img src="img/@@src" alt="@@title" />
			</div>
			<div class="share-list__title">@@title</div>
		</div>
		<div class="share-list__price">
			<div class="cur">@@price @@unit</div>
			@@if (context.old) {
			<div class="old">@@old @@unit</div>
			}
		</div>
	</a>

</div>