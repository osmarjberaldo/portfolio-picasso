import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 blur opacity-75" />
        <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
          Hello! I'm <span className="text-primary">Nikunj Thesiya</span>
        </h1>
      </div>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">
        A Front End Developer | Web Designer
      </p>
      <p className="mb-8 text-gray-400">
        with <span className="text-primary">3.5+ Years</span> Experience
      </p>
      <div className="flex gap-4">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Resume
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Hire Me
        </Button>
      </div>
    </div>
  );
};