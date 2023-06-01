import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function References() {
  return (
    <section className="Reference min-h-[80vh] flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold">References</h2>
      <h3 className="w-[70%] mx-auto mt-[3%]">
        Here are some amazing people I have got to work with. Please reach out
        to them to make sure I am not a crazy person!
      </h3>

      <div className="flex flex-col mt-[5%]  md:flex-row">
        <Card className="mt-6 mx-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 mx-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 mx-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
