import { useState } from "react";
import Cookies from "js-cookie";

const samplePrompts = [
  "Mad Max, Oscar nominated, intense, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k",
  "Disney Pixar, Award winning, intense, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, 8k",
  "mdjrny-v4 style portrait of Shaman, Indian Headdress, wild face paint, intricate, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k",
  "mdjrny-v4 style portrait, triumph, highly detailed, digital painting, artstation, hyper-detail, smooth, sharp focus, illustration, oil painting by JMW Turner, 8k",
];
import sample from "lodash/sample";

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));
  const [modelCode, setModelCode] = useState(null);

  const modelCookie = Cookies.get("model");

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-5 animate-in fade-in duration-700"
    >
      <div className="flex max-w-[512px] grid grid-cols-1 gap-5">
        <div>
        <p
          className="text-sm text-gray-500 pb-2"
        >
          Description (prompt) for the image, include all the detail like these examples for best results:
        </p>
        <textarea
          type="text"
          defaultValue={prompt}
          name="prompt"
          placeholder="Enter a prompt..."
          className="block w-full flex-grow rounded-l-md p-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          // three lines
          rows="5"
        />
        </div>

        <input
          type="text"
          defaultValue={modelCookie || modelCode}
          onChange={(e) => setModelCode(e.target.value)}
          name="version"
          placeholder="Enter Model Code..."
          className="block w-full flex-grow rounded-l-md"
        />

        <button
          className="bg-black text-white rounded-md py-2 text-small inline-block px-3 flex-none"
          type="submit"
        >
          {props.modelLoaded ? "Generate" : "Load Model (can take 2-3 minutes)"}
        </button>
      </div>
    </form>
  );
}
