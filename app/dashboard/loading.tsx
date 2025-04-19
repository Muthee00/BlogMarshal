import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";

const LoadingDashboard = () => {
  return (
    <div>
      <Skeleton className="w-full h-[400px]" />
    </div>
  );
};

const Dashboard = React.lazy(() => import("@/app/dashboard/page"));

const DashboardWithSuspense = () => {
  return (
    <Suspense fallback={<LoadingDashboard />}>
      <Dashboard />
    </Suspense>
  );
};

export default DashboardWithSuspense;
