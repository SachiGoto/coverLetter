import { Tooltip, Button } from "@material-tailwind/react";

export default function Skills() {
  const design = [
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613369/thumbnail_tool_logos_0008_photoshoplogo_png_ba50718329.png",
      name: "Photoshop",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613368/thumbnail_tool_logos_0004_figmalogo_webp_335b5f3887.png",
      name: "Figma",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613366/tool_logos_0006_illustratorlogo_png_918390455c.png",
      name: "Illustrator",
    },
  ];

  const frontEnd = [
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658616604/thumbnail_htmllogo_ef52f7d90b.png",
      name: "HTML",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658616604/thumbnail_csslogo_d6a153eed0.png",
      name: "CSS",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658616603/javascriptlogo_e9cd1e54b8.png",
      name: "JavaScript",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1681777638/typescriptIcon_xvamar.png",
      name: "TypeScript",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1682892217/react_j3f0vg.avif",
      name: "React",
    },

    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1681776881/tailwindIcon_onmyz7.png",
      name: "Tailwind",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613366/thumbnail_tool_logos_0001_angularlogo_png_b2b0087835.png",
      name: "Angular",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1681777214/shopify_pnlnft.png",
      name: "Shopify",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1662160595/small_atlassian_jira_logo_icon_170511_4eb19b4f96.png",
      name: "Jira",
    },
  ];

  const backEnd = [
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1666227630/mongodbicon_dpiqsc.png",
      name: "MongoDB",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613368/thumbnail_tool_logos_0009_Layer_2_ce625068fe.png",
      name: "MySQL",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613367/thumbnail_tool_logos_0003_digitaloceanlogo_png_a688e5b1d5.png",
      name: "Digital Ocean",
    },
    {
      url: "https://res.cloudinary.com/vanarts-webdev/image/upload/v1658613366/tool_logos_0007_nodejslogo_png_85d0e8ab1a.png",
      name: "Node.js",
    },
  ];

  return (
    <section className="skills min-h-[80vh] flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold mb-[10%]">Skills</h2>
      <div className="flex flex-col">
        <h4>Design tools</h4>
        <div className="design py-[5%] flex justify-center">
          {design.map((icon) => (
            <>
              <Tooltip content={icon.name}>
                <img
                  data-tooltip-target={icon.name}
                  className="w-[50px] h-[50px] object-cover mx-[2%]"
                  src={icon.url}
                  key={icon.name}
                  alt={icon.name}
                />
              </Tooltip>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h4>Front End Tools</h4>
        <div className="frontEnd py-[5%] flex justify-center">
          {frontEnd.map((icon) => (
            <>
              <Tooltip content={icon.name}>
                <img
                  data-tooltip-target={icon.name}
                  className="w-[50px] h-[50px] object-cover mx-[2%]"
                  src={icon.url}
                  key={icon.name}
                  alt={icon.name}
                />
              </Tooltip>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h4>Back End Tools</h4>
        <div className=" py-[5%] backEnd  flex justify-center">
          {backEnd.map((icon) => (
            <>
              <Tooltip content={icon.name}>
                <img
                  data-tooltip-target={icon.name}
                  className="w-[50px] h-[50px] object-cover"
                  src={icon.url}
                  key={icon.name}
                  alt={icon.name}
                />
              </Tooltip>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
