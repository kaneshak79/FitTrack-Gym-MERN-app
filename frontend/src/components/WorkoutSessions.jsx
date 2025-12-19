import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
           Experience our Top Workout Sessions crafted by certified trainers for maximum results.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our featured bootcamps to push your limits and achieve your fitness goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build muscle, improve endurance, and get stronger with guided high-intensity workouts.
            </p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>
              Burn calories fast and boost stamina with fun, high-energy cardio sessions.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Train movements that improve everyday performance, agility, and flexibility.
            </p>
          </div>
          <div>
            <h4>HIIT Extreme</h4>
            <p>
               flexibility, balance, and mental focus with expert-led yoga sessions.
            </p>
          </div>
          <div>
            <h4>Core & Abs</h4>
            <p>
              Strengthen your core, sculpt your abs, and improve posture with focused exercises led by expert trainers.
            </p>
          </div>
          <div>
            <h4>Outdoor Bootcamp</h4>
            <p>
             Experience the thrill of outdoor workouts combining running, bodyweight exercises, and team challenges for a fun full-body session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;