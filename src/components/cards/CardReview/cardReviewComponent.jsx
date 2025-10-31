function CardReviewComponent() {
  return (
    <article
      className="bg-white shadow-md rounded-xl p-6 max-w-sm mx-auto text-gray-700"
      aria-labelledby="review-title-1"
      role="article"
    >
      <header className="flex items-center space-x-4 mb-4">
        <figure
          className="flex items-center space-x-3"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
            alt="Foto de perfil de Marta López"
            width="64"
            height="64"
            decoding="async"
            loading="lazy"
            itemProp="image"
            className="w-16 h-16 rounded-full object-cover border border-gray-200"
          />
          <figcaption className="flex flex-col">
            <span
              className="font-semibold text-gray-900 text-lg"
              id="review-title-1"
              itemProp="name"
            >
              Marta López
            </span>
            <span className="text-sm text-gray-500">Marketing</span>
          </figcaption>
        </figure>
      </header>

      <div className="text-gray-600 leading-relaxed" itemProp="reviewBody">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae.
        </p>
      </div>
    </article>
  );
}

export default CardReviewComponent;
