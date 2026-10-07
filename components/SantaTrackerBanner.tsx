export default function SantaTrackerBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-12 sm:py-16">
      <div className="absolute inset-0 star-field" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Track Santa&apos;s Journey
          <br />
          <span className="text-santa-red">Around the World</span>
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Santa Radio is the home of our Santa Tracker. Follow Santa&apos;s
          estimated Christmas Eve journey, enjoy festive facts and see what
          he&apos;s up to throughout the year.
        </p>
        <a
          href="https://www.santaradio.co.uk/santa-tracker"
          className="inline-block mt-6 px-6 py-3 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
        >
          Track Santa on Santa Radio
        </a>
      </div>
    </section>
  );
}
