import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import ChartComponent from "./AnalyticsChart";

export interface AnalyticsData {
  imageSrc: StaticImageData;
  title: string;
  accountCount: number;
}

interface AnalyticsCardProps {
  data: AnalyticsData[];
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between">
      {data.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2">
          {" "}
          {/* Set to w-1/2 for all screens */}
          <Card className="bg-subCard h-full">
            <CardContent className="p-4">
              <Header imageSrc={item.imageSrc} />
              <div className="flex flex-col md:flex-row md:justify-between mt-4 gap-2">
                <div className="flex-grow md:min-w-[50%] lg:min-w-[50%] flex items-end">
                  <Content
                    title={item.title}
                    accountCount={item.accountCount}
                  />
                </div>
                <div className="flex items-end justify-center md:min-w-[50%] mt-4 md:mt-0">
                  <ChartComponent />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

interface HeaderProps {
  imageSrc: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ imageSrc }) => (
  <div className="flex justify-start items-center mb-3">
    <div className="h-8 w-8 bg-icon rounded-md flex items-center p-1">
      <Image
        src={imageSrc}
        alt="Users"
        width={25}
        height={25}
        className="m-auto"
      />
    </div>
  </div>
);

interface ContentProps {
  title: string;
  accountCount: number;
}

const Content: React.FC<ContentProps> = ({ title, accountCount }) => (
  <div>
    <h4 className="text-sm font-normal">{title}</h4>
    <div className="text-xl font-semibold">
      {accountCount}{" "}
      <span className="text-sm font-normal text-btn-foreground">Accounts</span>
    </div>
  </div>
);

export default AnalyticsCard;
