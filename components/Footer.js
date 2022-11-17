import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";

const SignUpForm = () => {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full rounded border border-slate-500 bg-slate-600 py-3 pl-3 pr-10 text-white placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Footer = ({ settings }) => {
  return (
    <div className="bg-gray-200 p-10">
      <div className="container mx-auto">
        <div class="flex flex-row gap-x-8">
          <div>
            <SignUpForm />
          </div>
          <div className="flex flex-row gap-x-8">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
        <div className="mx-auto w-full max-w-3xl text-center">
          Published using{" "}
          <PrismicLink
            href="https://prismic.io"
            className="text-black font-bold"
          >
            Prismic
          </PrismicLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
