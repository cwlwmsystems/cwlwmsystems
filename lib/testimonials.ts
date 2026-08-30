export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/*
  Add only testimonials that a real client has approved for public use.
  The homepage component stays hidden while this array is empty so the
  public site never displays invented social proof.
*/
export const testimonials: Testimonial[] = [];
