import { useRouter } from "next/router";
import { ArrowButton } from "../ui"

export const ScheduleCallButton = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:max-w-[602px] ml-auto mt-8 md:mt-0">
        <div className="items-center w-full">
          <ArrowButton  display="schedule"
            onClick={() => {
              {/* window.open(
                  'https://crm.zoho.com/bookings/MeetwithLakshmi?rid=415120ea3179d198f389515c5f2bb064f3d346389479a80478b8193e8d760dcf455dd403104059ed2477ee6f1ea236eegidbb5260664b3b9625bb34b5ad14dcddfc2edc8af1f3700d5605ccb8d4b19e0cbe&option=embed',
                  '_blank',
                  'noopener,noreferrer'
                ) */}
              window.open('/schedule-a-call', '_blank');
            }}
            className="w-full h-12 md:h-[70px] right-2 rounded-6xl duration-300 ease-out"
          />
        </div>
      </div>
    </>
  )
}
