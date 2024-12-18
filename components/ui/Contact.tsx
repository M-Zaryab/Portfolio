"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const frameworks = ["Next.js", "React", "Vue", "Nuxt", "Svelte", "Angular"];

export default function CreateProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <div className="w-full max-w-md p-6 bg-[#1C1C1C] rounded-xl">
      <h1 className="text-2xl font-semibold text-white mb-2">Create project</h1>
      <p className="text-gray-400 mb-6">
        Deploy your new project in one-click.
      </p>

      <div className="space-y-4">
        <div>
          <input type="text" />
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Name of your project"
            className="w-full px-3 py-2 bg-[#2C2C2C] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500"
          />
        </div>

        <div>
          <label htmlFor="framework" className="block text-white mb-2">
            Framework
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-3 py-2 bg-[#2C2C2C] text-left text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 flex justify-between items-center"
            >
              {selectedFramework || "Select"}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute w-full mt-1 bg-[#2C2C2C] rounded-md shadow-lg max-h-60 overflow-auto z-10">
                {frameworks.map((framework) => (
                  <button
                    key={framework}
                    onClick={() => {
                      setSelectedFramework(framework);
                      setIsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-gray-300 hover:bg-[#3C3C3C] focus:outline-none"
                  >
                    {framework}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={() => {
              setProjectName("");
              setSelectedFramework("");
            }}
            className="px-4 py-2 bg-[#2C2C2C] text-white rounded-md hover:bg-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle deploy logic here
              console.log("Deploying:", { projectName, selectedFramework });
            }}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
}
