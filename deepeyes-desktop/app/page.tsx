import React from "react"; 
import VideoPage from "@/components/video";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
export default function ConsolePage() {
  return (
    // <div className="flex flex-col min-h-screen">
    <SidebarInset className="mt-20">
      <header className="flex h-14 mt-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <VideoPage />
      </div>
    </SidebarInset>
  );
}
