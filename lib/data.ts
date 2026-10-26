export interface WeddingData {
  monogram: string;
  flightNo: string;
  departureTime: string;
  bride: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    residence: string;
    grandparents: string;
    phone: string;
  };
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
  reception: {
    dateLabel: string;
    dayLabel: string;
    timeLabel: string;
    venueName: string;
    address: string;
    maps: string;
  };
  compliments: string;
  contact: {
    name: string;
    phone: string;
  };
}

export const weddingData: WeddingData = {
  monogram: "S & A",
  flightNo: "AS-2027",
  departureTime: "11:00 AM",
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
  reception: {
    dateLabel: "02 • JANUARY • 2027",
    dayLabel: "Saturday",
    timeLabel: "From 4:00 pm onwards",
    venueName: "Ayisha Convention Centre",
    address: "Ayisha Convention Centre, Mylapore, Kollam",
    maps: "https://maps.google.com/?q=Ayisha+Convention+Centre+Mylapore+Kollam",
  },
  compliments: "Suhana Navas",
  contact: {
    name: "Mr. Navas S",
    phone: "9847593553",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Boarding Pass", href: "#boarding-pass" },
  { label: "Venue", href: "#venue" },
];
