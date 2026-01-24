const contacts = [
  {
    title: "Gas Station",
    days: "Everyday",
    hours: "7:00 AM - 10:00 PM",
    number: "4702393499",
  },
  {
    title: "Deli",
    days: "Monday - Saturday",
    hours: "7:00 AM - 2:00 PM",
    number: "4705575448",
  },
  {
    title: "Home Delivery",
    days: "Everyday",
    hours: "7:00 AM - 9:00 PM",
    number: "4706011330",
  },
];

contacts.sort((a, b) => a.title.localeCompare(b.title));

export default contacts;
