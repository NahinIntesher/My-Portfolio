import { motion } from "framer-motion";

export function StatCard({
  number,
  label,
  icon,
  color = "from-blue-500 to-blue-600",
}) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-3 sm:p-4 md:p-5 shadow-md relative overflow-hidden group w-full min-w-0"
      whileHover={{
        y: -4,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative background circle */}
      <div
        className={`absolute -right-6 -bottom-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity`}
      />

      {/* Icon + Line */}
      <div className="flex justify-between items-center mb-3 gap-2">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${color} text-white shadow-md shrink-0`}
        >
          <span className="text-base sm:text-lg">{icon}</span>
        </div>

        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-0 flex-1"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Stat Number */}
      <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">
        {number}
      </div>

      {/* Stat Label */}
      <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-0.5">
        {label}
      </div>
    </motion.div>
  );
}
