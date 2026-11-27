export type Clinic = {
  name: string;
  street: string;
  city: string;
  province: string;
  phone: string;
  details: string;
  href: string;
};

export default function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <article
      className="border border-border rounded-2xl p-8 flex flex-col gap-4 h-full"
      aria-label={clinic.name}
    >
      <div>
        <h3 className="text-xl font-medium">{clinic.name}</h3>
        <address className="not-italic text-sage-dark text-base mt-1">
          {clinic.street}<br />{clinic.city}, {clinic.province}
        </address>
      </div>
      <p className="text-foreground/60 text-sm leading-relaxed">{clinic.details}</p>
      <a
        href={clinic.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book an appointment with Cori Lucas at ${clinic.name}`}
        className="mt-auto inline-block bg-sage text-white text-lg font-bold px-6 py-4 rounded-full text-center hover:bg-sage-dark transition-colors border border-white/20"
      >
        Book Now
      </a>
      <p className="text-center text-sm text-foreground/60">
        or call{" "}
        <a
          href={`tel:+1${clinic.phone.replace(/-/g, "")}`}
          aria-label={`Call ${clinic.name} at ${clinic.phone}`}
          className="text-sage-dark font-medium hover:underline"
        >
          {clinic.phone}
        </a>
      </p>
    </article>
  );
}
