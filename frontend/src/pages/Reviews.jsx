import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import TestimonialCard from '../components/TestimonialCard';

export default function Reviews() {
  useSEO({
    title: 'Client Reviews & Testimonials',
    description: 'Read heartfelt stories from families and couples who trusted Sai Krishna Photography. 4.9★ Google rating with 5,000+ sessions captured over 30 years.',
    keywords: 'Sai Krishna Photography reviews, wedding photographer testimonials Vijayawada, client feedback, photography studio reviews, best rated photographer Andhra Pradesh, 5 star photography reviews',
    path: '/reviews',
    image: '/photos/wedding/3.jpg',
  });

  const testimonials = [
    {
      id: 1,
      text: "They didn't just take pictures; they captured the very essence of our family. The heirloom album they provided brought us to tears. A truly magical experience.",
      author: "The Sharma Family",
      role: "Family Session"
    },
    {
      id: 2,
      text: "Booking Sai Krishna Photography for our wedding was the best decision we made. The cinematic quality of the video and the candids were breathtaking.",
      author: "Anjali & Rahul",
      role: "Wedding Photography & Videography"
    },
    {
      id: 3,
      text: "Professional, patient, and incredibly talented. They made my maternity shoot feel effortless and empowering.",
      author: "Priya Patel",
      role: "Maternity Session"
    },
    {
      id: 4,
      text: "We needed premium commercial photography for our new product line, and they delivered beyond our expectations. The attention to detail is unmatched.",
      author: "Vikram S.",
      role: "Commercial Photography"
    }
  ];

  return (
    <main className="bg-brand-dark min-h-screen pb-32">
      <PageHero
        heading="Stories from our Clients"
        subheading="They didn’t just take pictures — they captured us."
        minHeight="min-h-[50vh]"
        image="/photos/wedding/3.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} text={t.text} author={t.author} role={t.role} />
          ))}
        </div>
      </section>
    </main>
  );
}
