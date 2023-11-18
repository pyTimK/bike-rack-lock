import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import { useContext, useEffect } from "react";

interface GcashFlowPage5Props {}

const GcashFlowPage5: React.FC<GcashFlowPage5Props> = ({}) => {
  const { setPage } = useContext(PageWrapperContext);
  useEffect(() => {
    setTimeout(() => {
      setPage(Pages.GcashFlow6);
    }, 800);
  }, []);
  return (
    <div className="w-screen h-screen bg-gcash_loading_bg ">
      <div className="flex justify-center pt-80">
        <img src="/images/gcash_loading.png" alt="coin slot" width={250} />
      </div>
    </div>
  );
};

export default GcashFlowPage5;
