// Single source for the FAQ: the visible section and the FAQPage JSON-LD both
// read from here, so their text cannot drift apart. Answers are written by Cori.
export type FaqItem = { question: string; answer: string };
export type FaqGroup = { id: string; heading: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "about",
    heading: "About acupuncture",
    items: [
      {
        question: "What does acupuncture treat?",
        answer:
          "Acupuncture is not just for injuries. It can be an effective treatment for anxiety, balancing hormones, digestive issues, mental health concerns and insomnia.",
      },
      {
        question: "What is TCM?",
        answer:
          "Traditional Chinese medicine (TCM) encompasses a huge scope of practice going back over 2000 years. It focuses on treating the client as a whole being and aims to treat the root of the problem instead of just the symptoms. It encompasses modalities such as cupping, gua sha, tuina and moxibustion.",
      },
      {
        question: "Is acupuncture regulated in Nova Scotia?",
        answer:
          "Acupuncture is not currently regulated in Nova Scotia. Because of this, membership in an association is a protection for the public, so you can know that the health care practitioner you are seeing is properly trained and accountable.",
      },
    ],
  },
  {
    id: "needles-and-safety",
    heading: "Needles and safety",
    items: [
      {
        question: "Is acupuncture painful?",
        answer:
          "Acupuncture should not be painful. While the tools we use do enter the skin, they are hair-thin and flexible, and often are not noticeable at all.",
      },
      {
        question: "Is acupuncture safe? Are the needles sterile and single use?",
        answer:
          "Acupuncture done by a trained practitioner uses single-use, sterile acupuncture needles.",
      },
      {
        question: "Who can have acupuncture, and is there anyone who shouldn't?",
        answer:
          "There are very few contraindications for acupuncture. Your practitioner is trained to know which acupuncture points are not recommended for certain conditions. The only strict condition under which acupuncture cannot be administered is if the client cannot give informed consent (i.e. if they are under the influence of drugs or alcohol, or are unconscious).",
      },
      {
        question: "What if I'm nervous about needles?",
        answer:
          "Trust is key in an acupuncture treatment, and any concerns will be discussed beforehand. The treatment will be curated to your needs and comfort level, and you can end or change it at any point.",
      },
      {
        question: "Can I get cupping, gua sha or tuina instead of needles if I'm nervous?",
        answer:
          "Yes. Bodywork is often incorporated into treatments, and if your tolerance for needles is low, it is a great place to start.",
      },
    ],
  },
  {
    id: "your-visit",
    heading: "Your visit",
    items: [
      {
        question: "What should I expect at my first appointment?",
        answer:
          "Initial appointments are between 1 hour and 90 minutes and involve a comprehensive intake. Expect to be on the treatment table for 30 to 45 minutes.",
      },
      {
        question: "How should I prepare, and what should I wear?",
        answer:
          "Don't come on an empty stomach, and try to be hydrated. Wear loose, comfortable clothing.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "The number of treatments varies from person to person. Acupuncture works best when you stay consistent with it. It can sometimes offer immediate relief, but true healing takes time, especially in chronic situations.",
      },
      {
        question: "What can I expect afterwards?",
        answer:
          "Everyone's experience with acupuncture is unique. Generally the changes are subtle, but they can be noticed for days after a treatment.",
      },
    ],
  },
  {
    id: "cost-and-credentials",
    heading: "Cost and credentials",
    items: [
      {
        question: "Is acupuncture covered by insurance?",
        answer:
          "Because Cori is a Registered Acupuncturist, sessions are often partially covered by extended health care plans. Some insurance plans require a doctor's referral.",
      },
      {
        question: "Will I get a receipt?",
        answer: "Yes. You will be issued a receipt with all pertinent information upon payment.",
      },
      {
        question: "What is ATCMANS?",
        answer:
          "Cori is a Registered Acupuncturist and a member of the Acupuncture & Traditional Chinese Medicine Association of Nova Scotia (ATCMANS). Being a member of this association ensures that she is held to a standard of education and ethical practice. The association requires her to carry liability insurance, complete continuing education and maintain a very strict ethical code.",
      },
      {
        question: "What does R.Ac mean?",
        answer:
          "R.Ac stands for Registered Acupuncturist. Cori is a Registered Acupuncturist and a member of ATCMANS.",
      },
      {
        question: "What are Cori's qualifications?",
        answer:
          "Cori Lucas is a Registered Acupuncturist holding a 2200-hour certification from the College of Acupuncture and Traditional Chinese Medicine in Bedford, Nova Scotia, and is a member of the Acupuncture & Traditional Chinese Medicine Association of Nova Scotia (ATCMANS).",
      },
    ],
  },
];
