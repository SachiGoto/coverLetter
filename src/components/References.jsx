import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function References() {
  return (
    <section
      id="references"
      className="Reference min-h-[80vh] flex flex-col justify-center"
    >
      <h2 className="text-3xl font-extrabold">References</h2>
      <h3 className="w-[70%] mx-auto mt-[3%] font-serif">
        Here are some amazing people I have got to work with.<br></br> Please
        feel free to contact them to verify that I'm not just some crazy person!
      </h3>

      <div className="flex flex-col mt-[5%]  md:flex-row">
        <Card className="mt-6 mx-2   md:w-[30%]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Anup Saund
            </Typography>
            <p className="text-sm text-bold md:min-h-[80px] font-semi-bold">
              Founding Manager at Silver Ponies
            </p>
            <p className="font-bold text-sm ">anup@silverponies.ca</p>
          </CardBody>
        </Card>
        <Card className="mt-6 mx-2  md:w-[30%]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              John Manore
            </Typography>
            <p className="text-sm text-bold md:min-h-[80px] font-semi-bold">
              Head Of Department Web Development & Digital Design at VanArts
            </p>
            <p className="font-bold text-sm ">John@vanarts.com</p>
          </CardBody>
        </Card>
        <Card className="  mt-6 mx-2 md:w-[30%]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Brittany Geddert
            </Typography>
            <p className="text-sm text-bold md:min-h-[80px] font-semi-bold">
              Client I built a website for Brittany and her family business at
              Willems Berry Farm
            </p>
            <p className="font-bold text-sm ">brittanygeddert@gmail.com</p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
