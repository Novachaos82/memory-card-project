import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex-1 mt-8">
      <div className="bg-black text-center text-white p-2  w-screen flex justify-center items-center gap-5 bottom-0 absolute text-xl">
        Made By Bhavesh{" "}
        <a className="inline-block" href="https://github.com/Novachaos82">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export { Footer };
