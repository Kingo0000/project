import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Code, Users, Zap } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />,
      title: "Web Development Hub",
      description:
        "Connect with developers, share projects, and learn cutting-edge web technologies.",
    },
    {
      icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-green-500" />,
      title: "Community Network",
      description:
        "Join a vibrant community of tech enthusiasts, developers, and innovators across Nigeria.",
    },
    {
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
      title: "Opportunity Updates",
      description:
        "Stay informed about tech job opportunities, hackathons, and skill-building workshops.",
    },
  ];

  const instagramUrl = "https://www.instagram.com/techconnectng"; // Replace with your actual Instagram handle

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 md:py-16 text-center">
        <Typography
          variant="h1"
          className="mb-4 text-3xl md:text-4xl font-bold px-4"
        >
          #TechConnectNG
        </Typography>
        <Typography
          variant="lead"
          className="max-w-2xl mx-auto px-4 text-base md:text-lg"
        >
          Uniting Nigeria's Tech Ecosystem: Connecting Developers, Innovators,
          and Opportunities
        </Typography>
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4">
          <Button
            variant="filled"
            color="white"
            onClick={() => window.open(instagramUrl, "_blank")}
            className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50"
          >
            Join Community
          </Button>
          <Button
            variant="outlined"
            color="white"
            onClick={() => window.open(instagramUrl, "_blank")}
            className="w-full md:w-auto border-white text-white hover:bg-blue-700"
          >
            Learn More
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                {feature.icon}
              </div>
              <Typography
                variant="h5"
                className="mb-2 md:mb-3 text-lg md:text-xl"
              >
                {feature.title}
              </Typography>
              <Typography className="text-gray-600 text-sm md:text-base">
                {feature.description}
              </Typography>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 md:py-16 text-center">
        <Typography
          variant="h3"
          className="mb-3 md:mb-4 text-2xl md:text-3xl px-4"
        >
          Join the Nigerian Tech Revolution
        </Typography>
        <Typography
          variant="lead"
          className="max-w-2xl mx-auto mb-6 md:mb-8 px-4 text-base md:text-lg"
        >
          Whether you're a seasoned developer or just starting your tech
          journey, #TechConnectNG is your gateway to growth, collaboration, and
          opportunity.
        </Typography>
        <Button
          variant="filled"
          color="white"
          onClick={() => window.open(instagramUrl, "_blank")}
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          Get Started
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8 text-center">
        <Typography className="mb-3 md:mb-4 text-sm md:text-base px-4">
          © 2024 #TechConnectNG. Connecting Tech Talents Across Nigeria.
        </Typography>
        <div className="flex justify-center space-x-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white text-sm"
          >
            Instagram
          </a>
          <a href="#" className="text-blue-200 hover:text-white text-sm">
            LinkedIn
          </a>
          <a href="#" className="text-blue-200 hover:text-white text-sm">
            Discord
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
