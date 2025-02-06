const Skills = () => {
  return (
    <div id="skills" className="my-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">My Skills</h1>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 *:font-semibold">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1>HTML 90%</h1>
            <progress
              className="progress progress-error w-56 h-5"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>CSS 85%</h1>
            <progress
              className="progress progress-primary w-56 h-5"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Tailwind CSS 90%</h1>
            <progress
              className="progress progress-primary w-56 h-5"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Javascript 75%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="75"
              max="100"
            ></progress>
          </div>
        
          <div className="flex items-center justify-between gap-4">
            <h1>Git 60%</h1>
            <progress
              className="progress progress-success w-56 h-5"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1>ReactJS 70%</h1>
            <progress
              className="progress progress-info w-56 h-5"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Firebase 60%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Express 10%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="10"
              max="100"
            ></progress>
          </div>
        
          <div className="flex items-center justify-between gap-4">
            <h1>MongoDB 10%</h1>
            <progress
              className="progress progress-success w-56 h-5"
              value="10"
              max="100"
            ></progress>
          </div>
       

        </div>
      </div>
    </div>
  );
};

export default Skills;
