import type { FaqGroup } from "../faq";

export default function FaqSection({ groups }: { groups: FaqGroup[] }) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 px-6 bg-background border-t border-border"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl font-bold mb-10 text-sage-dark">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm uppercase tracking-widest text-sage-dark mb-3">
                {group.heading}
              </h3>
              <div className="border-t border-border">
                {group.items.map((item) => (
                  <details key={item.question} className="group border-b border-border">
                    <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark">
                      <span className="font-medium text-lg">{item.question}</span>
                      <span
                        aria-hidden="true"
                        className="text-sage-dark text-2xl leading-none transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-5 pr-8 text-foreground/75 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
