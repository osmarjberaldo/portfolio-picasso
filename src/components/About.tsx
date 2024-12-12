import { Card } from "./ui/card";

export const About = () => {
  const stats = [
    { value: "3.9+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
  ];

  const interests = [
    "Listening to Music",
    "Travelling",
    "Mountains",
    "Money",
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        About <span className="text-primary">Me</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="glass-card p-6 text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8">
          <p className="text-gray-300 leading-relaxed mb-8">
            A passionate Front End Developer with a Master's in Computer Application and over 3.9 years of experience in crafting captivating digital experiences. My expertise lies in developing cutting-edge technologies such as React.JS, Next.js, Apollo GraphQL, Redux, and more. I specialize in creating seamless user interfaces that not only look stunning but also deliver exceptional performance.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">I Love</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span key={interest} className="tech-pill">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};