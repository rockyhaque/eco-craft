import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Palette } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Virtual Origami Workshop",
    date: "2025-07-15",
    time: "14:00 - 16:00",
    instructor: "Jane Doe",
    participants: 20,
    category: "Paper Crafts",
  },
  {
    id: 2,
    title: "Watercolor Techniques Exhibition",
    date: "2024-11-22",
    time: "10:00 - 18:00",
    location: "Online Gallery",
    visitors: 500,
    category: "Painting",
  },
  {
    id: 3,
    title: "Knitting for Beginners",
    date: "2024-12-29",
    time: "13:00 - 15:00",
    instructor: "John Smith",
    participants: 15,
    category: "Textile Arts",
  },
  {
    id: 4,
    title: "Digital Illustration Masterclass",
    date: "2025-01-05",
    time: "15:00 - 17:00",
    instructor: "Emma Johnson",
    participants: 30,
    category: "Digital Art",
  },
  {
    id: 5,
    title: "Pottery Throwing Demonstration",
    date: "2025-02-12",
    time: "11:00 - 13:00",
    location: "Ceramic Studio",
    visitors: 50,
    category: "Ceramics",
  },
  {
    id: 6,
    title: "Sustainable Crafting Symposium",
    date: "2024-12-19",
    time: "09:00 - 18:00",
    location: "Eco Arts Center",
    visitors: 200,
    category: "Eco-Friendly Crafts",
  },
];

const UpComingEvents = () => {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-200 to-orange-200 px-8 py-10">
      <div className="max-w-screen-xl px-6 py-4 mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12 pt-6 pb-4">
          Upcoming Craft Events & Workshops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Palette className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-emerald-800">
                {event.title}
              </h3>
              <div className="flex items-center text-orange-700 mb-2">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-orange-700 mb-2">
                <Clock  className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              {event.instructor && (
                <div className="text-emerald-700 mb-2">
                  <span className="font-semibold">Instructor:</span>{" "}
                  {event.instructor}
                </div>
              )}
              {event.location && (
                <div className="text-emerald-700 mb-2">
                  <span className="font-semibold">Location:</span>{" "}
                  {event.location}
                </div>
              )}
              <div className="flex items-center text-emerald-700 mb-4">
                <Users className="w-4 h-4 mr-2" />
                <span>
                  {event.participants
                    ? `${event.participants} participants`
                    : `${event.visitors} expected visitors`}
                </span>
              </div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-200 to-orange-200 rounded-full text-xs font-medium text-emerald-800">
                {event.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UpComingEvents;
