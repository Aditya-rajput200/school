import React from 'react';

const Principalmsg = () => {
  return (
    <div className="bg-red-700 min-h-screen text-white flex flex-col items-center py-10 px-4 space-y-8 md:space-y-10">
      <h2 className="text-3xl font-bold text-center">Principal's Message</h2>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="w-40 h-40 bg-white rounded-full p-1 md:w-48 md:h-48">
          <img
            src="/assets/Apsprincipal.png"
            alt="Principal"
            className="w-full h-full rounded-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="text-xl font-bold text-center">
          <p>Gaurav Kumar Singh</p>
        </div>
      </div>

      <div className="max-w-3xl text-center">
        <p className="text-lg font-serif font-light leading-relaxed">
          "APS Bhimnagar stands as  citadel of learning and a harbinger of quality consciousness, committed to developing the minds and initiatives of children. The vitality of our classrooms, the energy of the playing fields, and the open friendliness of the work environment have enabled our students to reach their fullest potential—whether in securing distinctions in the board examinations or winning accolades in drama, debates, or sports. At APS Bhimnagar, it is our constant endeavour to create a connect between learners' spiritual, ethical, social, cognitive, and physical growth and development. Equipped with scientific outlook and transformative competences, <strong>FUTURE IS BRIGHT</strong> for our students."
        </p>
      </div>
    </div>
  );
};

export default Principalmsg;
