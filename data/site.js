export const church = {
  name: "Addis Kidan Evangelical Church",
  shortName: "Addis Kidan",
  amharicName: "አዲስ ኪዳን ወንጌላዊት ቤተክርስቲያን",
  city: "Virginia Beach, VA",
  address: "865 Woodstock Rd, Virginia Beach, VA 23464",
  phones: [
    {
      label: "Pastor's Cell",
      number: "(757) 575-2051",
      href: "tel:+17575752051",
    },
    {
      label: "Pastor's Office",
      number: "(757) 642-7130",
      href: "tel:+17576427130",
    },
  ],

  email: "info@addiskidanvb.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=865+Woodstock+Rd,+Virginia+Beach,+VA+23464",
  serviceTime: "Sunday Worship at 10:45 AM",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Faith", href: "/statement-of-faith" },
  { label: "Sermons", href: "/sermons" },
  { label: "Contact", href: "/contact" },
];

export const ministries = [
  {
    title: "Sunday Worship",
    text: "A Christ-centered weekly gathering with prayer, worship, Scripture, and fellowship for families in Hampton Roads.",
  },
  {
    title: "Bible Teaching",
    text: "Teaching rooted in the authority of Scripture and the good news of Jesus Christ.",
  },
  {
    title: "Community Fellowship",
    text: "A welcoming Ethiopian and Eritrean community where people can grow in faith and support one another.",
  },
];

export const visitDetails = [
  {
    label: "Worship Time",
    value: church.serviceTime,
  },
  {
    label: "Location",
    value: church.address,
  },
  {
    label: "Community",
    value: "Serving Virginia Beach, Norfolk, and Hampton Roads",
  },
];

export const sermons = [
  {
    title: "ወንጌል ለኃጢአተኞች",
    date: "April 14, 2024",
    summary:
      "A sermon from the public sermon archive of Addis Kidan Evangelical Church.",
  },
  {
    title: "ለእርሱ ብቻ",
    date: "March 31, 2024",
    summary:
      "A sermon from the public sermon archive of Addis Kidan Evangelical Church.",
  },
  {
    title: "ያለውን የማያጣ",
    date: "March 24, 2024",
    summary:
      "A sermon from the public sermon archive of Addis Kidan Evangelical Church.",
  },
  {
    title: "ሐዋርያዊ ተልዕኮ",
    date: "March 17, 2024",
    summary:
      "A sermon from the public sermon archive of Addis Kidan Evangelical Church.",
  },
];

export const beliefs = [
  "We believe the Bible is the inspired Word of God and the final authority for faith and life.",
  "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  "We believe Jesus Christ is fully God and fully man, crucified for our sins, risen from the dead, and coming again.",
  "We believe salvation is by grace alone through faith alone in Jesus Christ alone.",
  "We believe the Holy Spirit gives new life, empowers believers, and equips the church for witness and service.",
  "We believe the church is called to worship God, make disciples, proclaim the gospel, and serve its community.",
];
