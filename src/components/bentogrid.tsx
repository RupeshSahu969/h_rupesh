import { cn } from "@/utils/tw";
 
export const BentoGridItem = ({
  title,
  description,
}: {
  title?: string | React.ReactNode;
  description?: Array<string>;
}) => {
  const list = []
  if (description){
    let i = 0;
    for (const item of description){
      list.push(<li key = {i}>{item}</li>); 
      i++;
    };
  }
  
  const styling = {
    backgroundImage: `url('/services.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div style={styling} className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4")}>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm text-left dark:text-neutral-300 list-disc">
          {list}
        </div>
      </div>
    </div>
  );
};