const reviews = [
  "“Clear ROI and fast feedback loops.”",
  "“CPL dropped while lead quality went up.”",
  "“The funnel finally feels predictable.”",
  "“Weekly insights that actually move revenue.”",
  "“Creative testing that compounds.”"
];

export default function Reviews() {
  return (
    <section className="section pb-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-steel">Reviews</p>
          <h2 className="headline text-3xl text-primary sm:text-4xl">What founders say after launch</h2>
        </div>
        <div className="review-marquee">
          <div className="review-track">
            {reviews.map((review) => (
              <div key={review} className="review-card review-card-lg">
                {review}
              </div>
            ))}
            {reviews.map((review) => (
              <div key={`${review}-dup`} className="review-card review-card-lg">
                {review}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
