import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Zoom from "react-reveal/Zoom";

import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { FaFistRaised } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import {LiaHandsHelpingSolid} from "react-icons/lia";

export default function WhyMe({ company }) {
  return (
    <section id="whyMe" className="whyMe min-h-[80vh] justify-center mb-[10%]">
      <h2 className="text-3xl font-extrabold mb-[10%]">
        But why should {company} hire me?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <Zoom top>
          <Card className=" mt-6 mx-[3%] h-full">
            <CardBody>
              <FaFistRaised className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-sans"
              >
                Grit / Resilient
              </Typography>
              <Typography className="font-serif">
                I'm all about that grit and resilience. When faced with
                challenges, I've got this unwavering determination to keep
                pushing forward and bounce back stronger.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
        <Zoom top>
          <Card className=" mt-6 mx-[3%] h-full">
            <CardBody>
              <RiPlantLine className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-sans"
              >
                Drive to grow
              </Typography>
              <Typography className="font-serif">
                A genuine passion for staying up to date with emerging
                technologies. I thrive on the opportunity to work on new
                projects that involve cutting-edge tech stacks.
                
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
        <Zoom top>
          <Card className=" mt-6 mx-[3%] h-full">
            <CardBody>
              <LiaHandsHelpingSolid className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-sans"
              >
                Collaborative
              </Typography>
              <Typography className="font-serif">
                I believe that being a team player is a key to success.I value
                respecting and listening others and grow together and achieve
                {company}'s mission.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
      </div>
    </section>
  );
}
