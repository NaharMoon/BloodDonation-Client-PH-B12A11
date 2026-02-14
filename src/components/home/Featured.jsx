import Container from "../ui/Container";

export default function Featured() {
  return (
    <section className="section-pad">
      <Container>
        <div className="card-soft p-8 md:p-12">
          <h2 className="text-3xl font-extrabold">
            Why <span className="text-primary">BloodBond</span>?
          </h2>
          <p className="mt-3 opacity-80 max-w-3xl">
            We keep the interface simple, the process reliable, and the design consistent — no random colors, no clutter.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              "Clean & recruiter-friendly UI",
              "Responsive dashboard sidebar layout",
              "Secure auth & protected routes",
            ].map((t) => (
              <div key={t} className="p-5 rounded-3xl border border-base-300 bg-white/60">
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
