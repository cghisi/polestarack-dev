import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Button } from "./Button";

const Footer = ({ settings }) => {
  return (
    <div className="bg-gray-200 px-5 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          <div className="lg:w-1/3 mb-10">
            <PrismicRichText
              field={settings.newsletter_title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-3xl py-5">{children}</h2>
                ),
                paragraph: ({ children }) => <span>{children}</span>,
              }}
            />
            <PrismicRichText
              field={settings.newsletter_description}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-3xl">{children}</h2>
                ),
                paragraph: ({ children }) => <p className="py-5">{children}</p>,
              }}
            />
            <div className="absolute">
              <Button
                style="Secondary"
                color="#000"
                label={settings.newsletter_link_label}
                url={settings.newsletter_link}
                height="20"
                width="20"
              />
            </div>
          </div>
          <div className="grow lg:grid grid-cols-4 gap-4 my-5 text-gray-500 lg:my-0">
            <div>
              {settings.column_1.map((item, index) => (
                <span
                  className={
                    item.header
                      ? "flex items-center font-medium py-4"
                      : "flex items-center py-2"
                  }
                  key={index}
                >
                  <PrismicLink field={item.link_url}>
                    <PrismicText field={item.link_label} />
                  </PrismicLink>
                </span>
              ))}
            </div>
            <div>
              {settings.column_2.map((item, index) => (
                <span
                  className={
                    item.header
                      ? "flex items-center font-medium text-gray-500 py-4"
                      : "flex items-center py-2"
                  }
                  key={index}
                >
                  <PrismicLink field={item.link_url}>
                    <PrismicText field={item.link_label} />
                  </PrismicLink>
                </span>
              ))}
            </div>
            <div>
              {settings.column_3.map((item, index) => (
                <span
                  className={
                    item.header
                      ? "flex items-center font-medium text-gray-500 py-4"
                      : "flex items-center py-2"
                  }
                  key={index}
                >
                  <PrismicLink field={item.link_url}>
                    <PrismicText field={item.link_label} />
                  </PrismicLink>
                </span>
              ))}
            </div>
            <div>
              {settings.column_4.map((item, index) => (
                <span
                  className={
                    item.header
                      ? "flex items-center font-medium text-gray-500 py-4"
                      : "flex items-center py-2"
                  }
                  key={index}
                >
                  <PrismicLink field={item.link_url}>
                    <PrismicText field={item.link_label} />
                  </PrismicLink>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
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
