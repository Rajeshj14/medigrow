// 'use client'

// import { CheckCircle, Star, Award, Users } from 'lucide-react';

// export default function Stats() {
//   const stats = [
//     {
//       icon: Users,
//       value: '9000+',
//       label: 'Happy Clients Treated',
//       color: 'from-[#B964DD] to-[#F849C1]',
//     },
//     {
//       icon: Award,
//       value: '900+',
//       label: 'Procedures Performed',
//       color: 'from-[#B964DD] to-[#F849C1]',
//     },
//     {
//       icon: Star,
//       value: '4.7★',
//       label: 'Google Rating',
//       color: 'from-[#B964DD] to-[#F849C1]',
//     },
//     {
//       icon: CheckCircle,
//       value: '92%',
//       label: 'Patient Satisfaction',
//       color: 'from-[#B964DD] to-[#F849C1]',
//     },
//   ];

//   return (
//     <section className="py-1 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               <div className="relative z-10">
//                 <div
//                   className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
//                 >
//                   <stat.icon className="w-7 h-7 text-white" />
//                 </div>

//                 <div
//                   className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
//                 >
//                   {stat.value}
//                 </div>

//                 <div className="text-sm text-gray-600 font-medium leading-snug">
//                   {stat.label}
//                 </div>
//               </div>

//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'

import { CheckCircle, Star, Award, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '9000+',
      label: 'Happy Clients Treated',
      color: 'from-[#B964DD] to-[#F849C1]',
    },
    {
      icon: Award,
      value: '900+',
      label: 'Procedures Performed',
      color: 'from-[#B964DD] to-[#F849C1]',
    },
    {
      icon: Star,
      value: '4.7★',
      label: 'Google Rating',
      color: 'from-[#B964DD] to-[#F849C1]',
    },
    {
      icon: CheckCircle,
      value: '92%',
      label: 'Patient Satisfaction',
      color: 'from-[#B964DD] to-[#F849C1]',
    },
  ];

  return (
    <section className="py-1 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <div
                  className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}
                >
                  {stat.value}
                </div>

                <div className="text-xs md:text-sm text-gray-600 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-6 md:-mr-10 -mt-6 md:-mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}