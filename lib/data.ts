export interface WeddingData {
  monogram: string;
  flightNo: string;
  departureTime: string;
  groom: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    residence: string;
    grandparents: string;
    phone: string;
    altPhone: string;
  };
  bride: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    residence: string;
    grandparents: string;
    phone: string;
  };
  date: string;
  dateLabel: string;
  dayLabel: string;
  hijriDate: string;
  timeLabel: string;
  venue: {
    name: string;
    address: string;
    city: string;
    maps: string;
    mapsEmbed: string;
  };
  companies: string[];
  contact: {
    name: string;
    phone: string;
    altPhone: string;
  };
}

export const weddingData: WeddingData = {
  monogram: "A & S",
  flightNo: "AS-2027",
  departureTime: "11:00 AM",
  groom: {
    name: "Alsad",
    fullName: "Alsad Subair",
    father: "Mr. Subair",
    mother: "Mrs. Naseela",
    residence: "Althaf Manzil, Nedumpana P.O, Kollam",
    grandparents:
      "Grand S/o Late Muhammed Kunju & Pathumuthu and Badarudheen Haji & Late Rasheeda Beevi",
    phone: "9447942779",
    altPhone: "8304862779",
  },
  bride: {
    name: "Safna",
    fullName: "Safna Navas",
    father: "Mr. Navas S",
    mother: "Mrs. Fasila S",
    residence: "Safna Manzil, Umayanalloor P.O, Kollam",
    grandparents:
      "Grand D/o Late Saidappa Rawther & Subaida Beevi and Shamsudheen & Late Sulbath",
    phone: "9847593553",
  },
  date: "2027-01-03T12:00:00",
  dateLabel: "03 • JANUARY • 2027",
  dayLabel: "Sunday",
  hijriDate: "25-Rajab-1448",
  timeLabel: "Between 12:00 noon & 12:30 pm",
  venue: {
    name: "Ayisha Convention Centre",
    address: "Mylapore, Umayanalloor",
    city: "Kollam, Kerala",
    maps: "https://maps.google.com/?q=Ayisha+Convention+Centre+Mylapore+Kollam",
    mapsEmbed:
      "https://www.google.com/maps?q=Ayisha+Convention+Centre+Mylapore+Kollam&output=embed",
  },
  companies: [
    "EASY FLY TOURS AND TRAVELS",
    "MAKE YOUR BRAND BUSINESS SETUP",
    "GOLDEN WINGS TOURISM",
  ],
  contact: {
    name: "Mr. Subair",
    phone: "9447942779",
    altPhone: "8304862779",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Boarding Pass", href: "#boarding-pass" },
  { label: "Venue", href: "#venue" },
];
